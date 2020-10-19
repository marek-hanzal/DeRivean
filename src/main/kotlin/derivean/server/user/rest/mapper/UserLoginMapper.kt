package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository

class UserLoginMapper(container: IContainer) : AbstractActionMapper<UserLoginMapper.UserLogin, UserLoginMapper.User>(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun resolve(item: UserLogin) = authenticatorService.authenticate(item.login, item.password).let {
		User(it.login, it.name, "internal")
	}

	data class UserLogin(val login: String, val password: String)
	data class User(
		val login: String,
		val name: String,
		val site: String,
	)
}
