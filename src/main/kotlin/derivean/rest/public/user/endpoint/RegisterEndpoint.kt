package derivean.rest.public.user.endpoint

import derivean.server.auth.AuthenticatorService
import derivean.storage.entities.UserEntity
import derivean.storage.repository.RoleRepository
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.routing.*
import leight.container.IContainer
import leight.mapper.AbstractCreateMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.conflictWithUnique
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

class RegisterMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<RegisterMapper.Request>, UserEntity>(container) {
	override val repository: UserRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val roleRepository: RoleRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: UserEntity) = request.request.let {
		entity.name = it.name
		entity.login = it.login
		entity.password = it.password?.let { password -> authenticatorService.encrypt(password) }
		entity.site = "game"
		entity.roles = SizedCollection(listOf(roleRepository.findByName("game")))
	}

	override fun exception(e: Throwable) = when {
		e.message?.contains("user_name_unique") == true -> {
			conflictWithUnique("Cannot register user!", "name", "Duplicate user name!")
		}
		e.message?.contains("user_login_unique") == true -> {
			conflictWithUnique("Cannot register user!", "login", "Duplicate login name!")
		}
		else -> null
	}

	data class Request(
		val login: String,
		val name: String,
		val password: String?,
	)
}
