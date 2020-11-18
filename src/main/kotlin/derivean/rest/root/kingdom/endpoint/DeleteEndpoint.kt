package derivean.rest.root.kingdom.endpoint

import derivean.storage.repository.KingdomRepository
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
		"/api/root/kingdom/delete".let { url ->
			discovery {
				name = "root.kingdom.delete"
				link = url
				description = "Delete a Kingdom"
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
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		kingdomRepository.delete(item.request.id)
	})

	data class Request(val id: String)
}
