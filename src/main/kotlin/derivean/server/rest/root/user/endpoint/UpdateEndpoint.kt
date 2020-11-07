package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.auth.AuthenticatorService
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/update".let { url ->
			discovery {
				name = "root.user.update"
				link = url
				description = "Update an User"
			}
			routing.authenticate {
				post(url) {
					resolve(call, updateMapper)
				}
			}
		}
	}
}

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				userRepository.update(item.id) {
					item.name?.let { this.name = it }
					item.login?.let { this.login = it }
					item.password?.let { this.password = authenticatorService.encrypt(it) }
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
		val name: String?,
		val login: String?,
		val password: String?,
		val attributes: Attributes?,
	)
}
