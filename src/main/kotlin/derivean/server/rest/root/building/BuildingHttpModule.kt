package derivean.server.rest.root.building

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.building.endpoint.AttributesEndpoint
import derivean.server.rest.root.building.endpoint.CreateEndpoint
import derivean.server.rest.root.building.endpoint.FetchEndpoint
import derivean.server.rest.root.building.endpoint.UpdateEndpoint
import io.ktor.routing.*

class BuildingHttpModule(container: IContainer) : AbstractHttpModule(container) {
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
