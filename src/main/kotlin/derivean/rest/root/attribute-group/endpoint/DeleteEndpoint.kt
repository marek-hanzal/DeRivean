package derivean.rest.root.`attribute-group`.endpoint

import derivean.storage.repository.AttributeGroupRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.Response
import leight.rest.ok

@KtorExperimentalAPI
class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-group/delete".let { url ->
			discovery {
				name = "root.attribute-group.delete"
				link = url
				description = "Delete a Attribute Group"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, deleteMapper)
					}
				}
			}
		}
	}
}

class DeleteMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<DeleteMapper.Request>, Response<out Any>>(container) {
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		attributeGroupRepository.delete(item.request.id)
	})

	data class Request(val id: String)
}
