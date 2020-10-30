package derivean.server.rest.root.kingdom

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.kingdom.endpoint.AttributesEndpoint
import derivean.server.rest.root.kingdom.endpoint.CreateEndpoint
import derivean.server.rest.root.kingdom.endpoint.FetchEndpoint
import derivean.server.rest.root.kingdom.endpoint.UpdateEndpoint
import io.ktor.routing.*

class KingdomHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			FetchEndpoint::class,
			AttributesEndpoint::class,
		)
	}
}
