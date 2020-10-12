package derivean.server.entity.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.entity.EntityRepository
import io.ktor.routing.*

class EntityPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val entityRepository: EntityRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"entity",
		entityRepository,
	)
}