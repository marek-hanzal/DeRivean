package derivean.rest.root.`attribute-type`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.storage.repository.AttributeTypeRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-type/update".let { url ->
			discovery {
				name = "root.attribute-type.update"
				link = url
				description = "Update an Attribute Type"
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
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
			item.request.let {
				fetchMapper.map(
					attributeTypeRepository.update(it.id) {
						this.name = it.name
						this.description = it.description
					}
				)
			}
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val id: String,
		val name: String,
		val description: String?,
	)
}