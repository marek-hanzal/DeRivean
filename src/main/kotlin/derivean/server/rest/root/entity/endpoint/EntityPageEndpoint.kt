package derivean.server.rest.root.entity.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.entity.EntityRepository
import derivean.server.rest.root.mapper.EntityFetchMapper
import io.ktor.routing.*

class EntityPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val entityRepository: EntityRepository by container.lazy()
	private val entityFetchMapper: EntityFetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"root",
		"entity",
		entityRepository,
		entityFetchMapper,
	)
}
