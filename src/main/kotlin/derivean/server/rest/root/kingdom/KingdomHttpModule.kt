package derivean.server.rest.root.kingdom

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.kingdom.endpoint.KingdomAttributesEndpoint
import derivean.server.rest.root.kingdom.endpoint.KingdomFetchEndpoint
import derivean.server.rest.root.kingdom.endpoint.KingdomPageEndpoint
import io.ktor.routing.*

class KingdomHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			KingdomFetchEndpoint::class,
			KingdomPageEndpoint::class,
			KingdomAttributesEndpoint::class,
		)
	}
}
