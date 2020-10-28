package derivean.server.rest.root.kingdom.endpoint

import derivean.game.kingom.KingdomAttributes
import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class AttributesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/kingdom/attributes".let { url ->
			discovery {
				name = "root.kingdom.attributes"
				link = url
				description = "Return available list of Attributes usable by a Kingdom."
			}
			routing.get(url) {
				call.resolve(ok(KingdomAttributes.export()))
			}
		}
	}
}
