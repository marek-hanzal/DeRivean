package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.root.mapper.KingdomUpdateMapper
import io.ktor.application.*
import io.ktor.routing.*

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val kingdomUpdateMapper: KingdomUpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/update".let { url ->
			discovery {
				name = "root.kingdom.update"
				link = url
				description = "Update a Kingdom"
			}
			routing.post(url) {
				resolve(call, kingdomUpdateMapper)
			}
		}
	}
}
