package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.root.mapper.KingdomCreateMapper
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val kingdomCreateMapper: KingdomCreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/create".let { url ->
			discovery {
				name = "create"
				group = "kingdom"
				namespace = "root"
				description = "Creates a new Kingdom"
				link = url
			}
			routing.post(url) {
				resolve(call, kingdomCreateMapper)
			}
		}
	}
}
