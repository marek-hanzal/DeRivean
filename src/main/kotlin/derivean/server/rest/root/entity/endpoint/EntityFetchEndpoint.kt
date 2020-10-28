package derivean.server.rest.root.entity.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.entity.EntityRepository
import derivean.server.rest.root.mapper.EntityFetchMapper
import io.ktor.routing.*

class EntityFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val entityFetchMapper: EntityFetchMapper by container.lazy()
	private val entityRepository: EntityRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"root",
		"entity",
		entityFetchMapper,
		entityRepository,
	)
}
