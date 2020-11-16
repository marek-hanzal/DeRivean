package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
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
		"/api/root/hero/attributes".let { url ->
			discovery {
				name = "root.hero.attributes"
				link = url
				description = "Return available list of Attributes usable by a Hero."
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						call.resolve(notImplemented("Read read attributes from a new endpoint (attribute group)"))
//						call.resolve(ok(HeroAttributes.export()))
					}
				}
			}
		}
	}
}
