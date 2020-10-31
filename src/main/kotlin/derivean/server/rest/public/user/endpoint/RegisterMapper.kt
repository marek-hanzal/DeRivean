package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.created
import derivean.lib.rest.internalServerError
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class RegisterMapper(container: IContainer) : AbstractCreateMapper<RegisterMapper.Request>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun resolve(item: Request) = try {
		created(fetchMapper.map(storage.write {
			userRepository.create {
				this.name = item.name
				this.login = item.login
				this.password = item.password?.let { authenticatorService.encrypt(it) }
				this.token = item.token
			}
		}))
	} catch (e: ExposedSQLException) {
		resolveUnique(
			e.message ?: "",
			"Cannot register a user", listOf(
				"login" to "user_login_unique"
			)
		) ?: throw e
	} catch (e: Throwable) {
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val login: String,
		val name: String,
		val password: String?,
		val token: String?,
	)
}
