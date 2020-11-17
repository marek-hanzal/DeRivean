package derivean.rest.root.`attribute-group`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.ok
import derivean.rest.common.AbstractActionMapper
import derivean.storage.repository.AttributeGroupRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import java.util.*

@KtorExperimentalAPI
class ListEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val listMapper: ListMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-group/attribute-type/list".let { url ->
			discovery {
				this.link = url
				this.name = "root.attribute-group.attribute-type.list"
				this.description = "Returns simple list (names) of attribute types."
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) { resolve(call, listMapper) }
				}
			}
		}
	}
}

class ListMapper(container: IContainer) : AbstractActionMapper<ListMapper.Request>(container) {
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.read {
		attributeGroupRepository.findByNames(item.request.groups).map { attributeGroup ->
			AttributeGroup(
				attributeGroup.id.value,
				attributeGroup.name,
				attributeGroup.types.map { attributeType ->
					AttributeType(
						attributeType.id.value,
						attributeType.name,
					)
				},
			)
		}
	})

	data class Request(
		val groups: List<String>,
	)

	data class AttributeGroup(
		val id: UUID,
		val name: String,
		val types: List<AttributeType>,
	)

	data class AttributeType(
		val id: UUID,
		val name: String,
	)
}
