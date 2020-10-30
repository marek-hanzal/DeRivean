package derivean.server.rest.root.building.endpoint

import derivean.game.building.BuildingAttributes
import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class AttributesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/building/attributes".let { url ->
			discovery {
				name = "root.building.attributes"
				link = url
				description = "Return available list of Attributes usable by a Building."
			}
			routing.get(url) {
				call.resolve(ok(BuildingAttributes.export()))
			}
		}
	}
}
