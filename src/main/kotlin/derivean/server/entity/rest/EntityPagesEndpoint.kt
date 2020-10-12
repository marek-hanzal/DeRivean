package derivean.server.entity.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPagesEndpoint
import derivean.server.entity.EntityRepository
import io.ktor.routing.*

class EntityPagesEndpoint(container: IContainer) : AbstractPagesEndpoint(container) {
	private val entityRepository: EntityRepository by container.lazy()

	override fun install(routing: Routing) = pages(
		routing,
		"entity",
		entityRepository
	)
}
