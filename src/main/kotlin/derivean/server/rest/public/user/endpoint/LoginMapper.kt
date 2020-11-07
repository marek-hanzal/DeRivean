package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.lib.user.LockedUserException
import derivean.lib.user.UserException
import derivean.server.auth.AuthenticatorService

class LoginMapper(container: IContainer) : AbstractActionMapper<LoginMapper.Request, Response<out Any>>(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.transaction {
			authenticatorService.authenticate(item.login, item.password).let {
				Response(it.login, it.name)
			}
		})
	} catch (e: LockedUserException) {
		forbidden(ValidationResponse.build {
			message = "Login failed!"
			validation("login", "error", "Your account is locked")
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

	data class Request(val login: String, val password: String)
	data class Response(
		val login: String,
		val name: String,
	)
}
