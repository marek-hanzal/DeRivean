package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.conflict
import derivean.lib.rest.created
import derivean.lib.rest.internalServerError
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UserCreateMapper(container: IContainer) : AbstractActionMapper<UserCreateMapper.UserCreate, Response>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val userFetchMapper: UserFetchMapper by container.lazy()

	override fun resolve(item: UserCreate) = try {
		created(userFetchMapper.map(storage.write {
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
				conflict(UserCreateError.build {
					message = "Cannot register new user"
					validation("login", "error", "User with the given login already exists")
				})
			}
			e.message?.contains("user_name_unique") == true -> {
				conflict(UserCreateError.build {
					message = "Cannot register new user"
					validation("name", "error", "User with the given login already exists")
				})
			}
			else -> {
				throw e
			}
		}
	} catch (e: Throwable) {
		internalServerError(UserCreateError.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class UserCreate(
		val login: String,
		val name: String,
		val password: String?,
		val token: String?,
	)

	data class UserCreateError(
		val message: String,
		val validations: Map<String, Validation>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var message: String
			private var validations = mutableMapOf<String, Validation>()

			fun validation(field: String, status: String, message: String) {
				validations[field] = Validation(status, message)
			}

			fun build() = UserCreateError(
				message,
				validations,
			)
		}
	}

	data class Validation(val status: String, val message: String)
}
