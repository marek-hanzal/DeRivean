package derivean.server.rest.root.kingdom.endpoint

import derivean.game.kingom.KingdomAttributes
import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class KingdomAttributesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		discovery {
			name = "attributes"
			group = "kingdom"
			namespace = "root"
			link = "/api/root/kingdom/attributes"
			description = "Return available list of Attributes usable by a Kingdom."
		}
		routing.get("/api/root/kingdom/attributes") {
			call.resolve(ok(KingdomAttributes.export()))
		}
	}
}
