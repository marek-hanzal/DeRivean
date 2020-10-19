package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.server.auth.AuthenticatorService

class UserLoginMapper(container: IContainer) : AbstractActionMapper<UserLoginMapper.UserLogin, UserLoginMapper.User>(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun resolve(item: UserLogin) = storage.transaction {
		authenticatorService.authenticate(item.login, item.password).let {
			User(it.login, it.name, it.token!!, "internal")
		}
	}

	data class UserLogin(val login: String, val password: String)
	data class User(
		val login: String,
		val name: String,
		val token: String,
		val site: String,
	)
}
