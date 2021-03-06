package derivean.rest.root.user.endpoint

import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.server.auth.AuthenticatorService
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/update".let { url ->
			discovery {
				name = "root.user.update"
				link = url
				description = "Update an User"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, updateMapper)
					}
				}
			}
		}
	}
}

class UpdateMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<UpdateMapper.Request>, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				userRepository.update(it.id) {
					it.name?.let { name -> this.name = name }
					it.login?.let { login -> this.login = login }
					it.site?.let { site -> this.site = site }
					it.password?.let { password -> this.password = authenticatorService.encrypt(password) }
					this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(it.attributes))
				}
			)
		}
	})

	override fun exception() = mapOf(
		"user_name_unique" to { conflictWithUnique("Cannot update user!", "name", "Duplicate user name!") },
		"user_login_unique" to { conflictWithUnique("Cannot update user!", "login", "Duplicate login name!") }
	)

	data class Request(
		val id: String,
		val name: String?,
		val login: String?,
		val site: String?,
		val password: String?,
		val attributes: Attributes?,
	)
}
