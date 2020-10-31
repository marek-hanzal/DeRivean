package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class RegisterMapper(container: IContainer) : AbstractActionMapper<RegisterMapper.Request, Response<out Any>>(container) {
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
		when {
			e.message?.contains("user_login_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot register new user"
					validation("login", "error", "User with the given login already exists")
				})
			}
			e.message?.contains("user_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot register new user"
					validation("name", "error", "User with the given login already exists")
				})
			}
			else -> {
				throw e
			}
		}
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
