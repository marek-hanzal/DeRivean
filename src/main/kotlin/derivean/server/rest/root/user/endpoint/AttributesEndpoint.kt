package derivean.server.rest.root.user.endpoint

import derivean.game.user.UserAttributes
import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class AttributesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/user/attributes".let { url ->
			discovery {
				name = "root.user.attributes"
				link = url
				description = "Return available list of Attributes usable by an User."
			}
			routing.get(url) {
				call.resolve(ok(UserAttributes.export()))
			}
		}
	}
}
