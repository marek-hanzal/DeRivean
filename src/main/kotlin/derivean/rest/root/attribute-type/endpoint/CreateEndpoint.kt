package derivean.rest.root.`attribute-type`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.storage.entities.AttributeType
import derivean.storage.repository.AttributeGroupRepository
import derivean.storage.repository.AttributeTypeRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-type/create".let { url ->
			discovery {
				name = "root.attribute-type.create"
				link = url
				description = "Creates a new Attribute Type"
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, AttributeType>(container) {
	override val repository: AttributeTypeRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: AttributeType) {
		request.request.let {
			entity.group = attributeGroupRepository.find(it.group)
			entity.name = it.name
			entity.description = it.description
		}
	}

	override fun resolveException(message: String): Response<out Any>? = null

	data class Request(
		val group: String,
		val name: String,
		val description: String?,
	)
}