package derivean.server.rest.root.user.kingdom

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.user.kingdom.endpoint.PageEndpoint
import io.ktor.routing.*

class KingdomHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PageEndpoint::class,
		)
	}
}
