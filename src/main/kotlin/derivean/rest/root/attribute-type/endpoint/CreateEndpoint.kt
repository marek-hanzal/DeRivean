package derivean.rest.root.`attribute-type`.endpoint

import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.repository.AttributeGroupRepository
import derivean.storage.repository.AttributeTypeRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractCreateMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.conflictWithUnique

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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, AttributeTypeEntity>(container) {
	override val repository: AttributeTypeRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: AttributeTypeEntity) = request.request.let {
		entity.group = attributeGroupRepository.find(it.group)
		entity.name = it.name
		entity.description = it.description
	}

	override fun exception() = mapOf(
		"attribute-type_name_unique" to { conflictWithUnique("Cannot create Attribute Type!", "name", "Attribute Type with the given name already exists.") },
	)

	data class Request(
		val group: String,
		val name: String,
		val description: String?,
	)
}
