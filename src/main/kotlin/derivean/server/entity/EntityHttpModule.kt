package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import derivean.server.entity.rest.EntityEndpoint
import derivean.server.entity.rest.EntityPageEndpoint
import derivean.server.entity.rest.EntityPagesEndpoint
import io.ktor.routing.*

class EntityHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			EntityPagesEndpoint::class,
			EntityPageEndpoint::class,
			EntityEndpoint::class,
		)
	}
}
