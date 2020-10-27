package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.kingdom.rest.KingdomAttributesEndpoint
import derivean.server.kingdom.rest.KingdomFetchEndpoint
import derivean.server.kingdom.rest.KingdomPageEndpoint
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
