package derivean.server.rest.root.entity

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.entity.endpoint.EntityFetchEndpoint
import derivean.server.rest.root.entity.endpoint.EntityPageEndpoint
import io.ktor.routing.*

class EntityHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			EntityPageEndpoint::class,
			EntityFetchEndpoint::class,
		)
	}
}
