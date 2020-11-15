package derivean.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.server.attribute.AttributeRepository
import derivean.server.auth.AuthenticatorService
import derivean.storage.entities.User
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, User>(container) {
	override val repository: UserRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: User) {
		request.request.let {
			entity.name = it.name
			entity.login = it.login
			entity.site = it.site
			entity.password = it.password?.let { password -> authenticatorService.encrypt(password) }
			entity.attributes = attributeRepository.attributes(entity.attributes, attributesMapper.map(it.attributes))
			it.template?.let { template ->
				repository.useTemplate(template, entity)
			}
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
