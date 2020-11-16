package derivean.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.server.auth.AuthenticatorService
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

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

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
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
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("user_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update User!"
					validation("name", "error", "User with the given name already exists.")
				})
			}
			e.message?.contains("user_login_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update User!"
					validation("login", "error", "User with the given login already exists.")
				})
			}
			else -> {
				throw e
			}
		}
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val id: String,
		val name: String?,
		val login: String?,
		val site: String?,
		val password: String?,
		val attributes: Attributes?,
	)
}
