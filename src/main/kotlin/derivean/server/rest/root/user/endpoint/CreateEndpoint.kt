package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.auth.AuthenticatorService
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import derivean.server.user.UserRepository
import derivean.server.user.entities.User
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/create".let { url ->
			discovery {
				this.name = "root.user.create"
				this.link = url
				this.description = "Create a new User"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, createMapper)
					}
				}
			}
		}
	}
}

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, User>(container) {
	override val repository: UserRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()

	override fun map(request: Request, entity: User) {
		entity.name = request.name
		entity.login = request.login
		entity.site = request.site
		entity.password = request.password?.let { authenticatorService.encrypt(it) }
		repository.attributes(entity.id, attributesMapper.map(request.attributes))
		request.template?.let {
			repository.useTemplate(it, entity)
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
		val name: String,
		val login: String,
		val site: String?,
		val password: String?,
		val template: String?,
		val attributes: Attributes?,
	)
}
