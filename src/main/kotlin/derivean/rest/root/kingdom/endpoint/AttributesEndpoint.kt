package derivean.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withRole
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.notImplemented
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class AttributesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/kingdom/attributes".let { url ->
			discovery {
				name = "root.kingdom.attributes"
				link = url
				description = "Return available list of Attributes usable by a Kingdom."
			}
			routing.authenticate {
				withRole("root") {
					get(url) {
						call.resolve(notImplemented("Read read attributes from a new endpoint (attribute group)"))
//						call.resolve(ok(KingdomAttributes.export()))
					}
				}
			}
		}
	}
}
