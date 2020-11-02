package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository
import derivean.server.user.entities.User

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, User>(container) {
	override val repository: UserRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun map(request: Request, entity: User) {
		entity.name = request.name
		entity.login = request.login
		entity.password = request.password?.let { authenticatorService.encrypt(it) }
		entity.token = request.token
		entity.site = request.site
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("user_name_unique")) {
			return conflictWithUnique("Cannot register user!", "name", "Duplicate user name!")
		} else if (message.contains("user_login_unique")) {
			return conflictWithUnique("Cannot register user!", "login", "Duplicate login name!")
		}
		return null
	}

	data class Request(
		val login: String,
		val name: String,
		val password: String?,
		val token: String?,
		val site: String,
	)
}
