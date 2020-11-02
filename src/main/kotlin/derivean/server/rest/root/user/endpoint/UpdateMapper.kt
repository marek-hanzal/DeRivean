package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.auth.AuthenticatorService
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				userRepository.update(item.id) {
					this.name = item.name
					this.login = item.login
					this.password = item.password?.let { authenticatorService.encrypt(it) } ?: this.password
					userRepository.attributes(item.id, attributeMapper.map(item.attributes))
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("user_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update User!"
					validation("name", "error", "User with the given name already exists.")
				})
			}
			e.message?.contains("user_login_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update User!"
					validation("login", "error", "User with the given login already exists.")
				})
			}
			else -> {
				throw e
			}
		}
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val id: String,
		val name: String,
		val login: String,
		val password: String?,
		val attributes: Attributes?,
	)
}
