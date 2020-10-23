package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.lib.user.UserException
import derivean.server.auth.AuthenticatorService

class UserLoginMapper(container: IContainer) : AbstractActionMapper<UserLoginMapper.UserLogin, Response>(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun resolve(item: UserLogin) = try {
		ok(storage.transaction {
			authenticatorService.authenticate(item.login, item.password).let {
				User(it.login, it.name, it.token!!, it.site)
			}
		})
	} catch (e: UserException) {
		forbidden(ValidationResponse.build {
			message = "Login failed!"
			validation("login", "error", "Check your login")
			validation("password", "error", "And your password")
		})
	} catch (e: NoSuchElementException) {
		forbidden(ValidationResponse.build {
			message = "Login failed!"
			validation("login", "error", "Who are you?")
		})
	} catch (e: Throwable) {
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class UserLogin(val login: String, val password: String)
	data class User(
		val login: String,
		val name: String,
		val token: String,
		val site: String,
	)
}
