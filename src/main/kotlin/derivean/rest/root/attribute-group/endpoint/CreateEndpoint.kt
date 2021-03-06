package derivean.rest.root.`attribute-group`.endpoint

import derivean.storage.entities.AttributeGroupEntity
import derivean.storage.repository.AttributeGroupRepository
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
		"/api/root/attribute-group/create".let { url ->
			discovery {
				name = "root.attribute-group.create"
				link = url
				description = "Creates a new Attribute Group"
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, AttributeGroupEntity>(container) {
	override val repository: AttributeGroupRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: AttributeGroupEntity) = request.request.let {
		entity.name = it.name
		entity.description = it.description
	}

	override fun exception() = mapOf(
		"attribute-group_name_unique" to { conflictWithUnique("Cannot create Attribute Group!", "name", "Attribute Group with the given name already exists.") },
	)

	data class Request(
		val name: String,
		val description: String?,
	)
}
