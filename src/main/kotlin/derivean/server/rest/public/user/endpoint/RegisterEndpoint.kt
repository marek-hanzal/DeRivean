package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.auth.AuthenticatorService
import derivean.server.user.RoleRepository
import derivean.server.user.UserRepository
import derivean.server.user.entities.User
import io.ktor.application.*
import io.ktor.routing.*
import org.jetbrains.exposed.sql.SizedCollection

class RegisterEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val registerMapper: RegisterMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/register".let { url ->
			discovery {
				this.name = "public.user.register"
				this.link = url
				this.description = "Register a new User"
			}
			routing.post(url) {
				resolve(call, registerMapper)
			}
		}
	}
}

class RegisterMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<RegisterMapper.Request>, User>(container) {
	override val repository: UserRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val roleRepository: RoleRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: User) {
		request.request.let {
			entity.name = it.name
			entity.login = it.login
			entity.password = it.password?.let { password -> authenticatorService.encrypt(password) }
			entity.site = "game"
			entity.roles = SizedCollection(listOf(roleRepository.findByName("game")))
		}
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
	)
}
