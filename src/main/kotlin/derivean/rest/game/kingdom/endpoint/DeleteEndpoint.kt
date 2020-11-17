package derivean.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.ok
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/game/kingdom/delete".let { url ->
			discovery {
				name = "game.kingdom.delete"
				link = url
				description = "Delete a Kingdom"
			}
			routing.authenticate {
				withAnyRole("game", "root") {
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
