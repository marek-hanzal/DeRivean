package derivean.server.rest.root.entity

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.entity.endpoint.FetchEndpoint
import io.ktor.routing.*

class EntityHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			FetchEndpoint::class,
		)
	}
}
