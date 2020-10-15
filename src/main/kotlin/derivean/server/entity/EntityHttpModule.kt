package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import derivean.server.entity.rest.EntityEndpoint
import derivean.server.entity.rest.EntityPageEndpoint
import io.ktor.routing.*

class EntityHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			EntityPageEndpoint::class,
			EntityEndpoint::class,
		)
	}
}
