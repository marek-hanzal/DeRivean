package derivean.server.entity.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.entity.EntityRepository
import derivean.server.entity.rest.mapper.EntityFetchMapper
import io.ktor.routing.*

class EntityEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val entityFetchMapper: EntityFetchMapper by container.lazy()
	private val entityRepository: EntityRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/entity",
		entityFetchMapper,
		entityRepository,
		"entity",
		"Get Entity's data.",
	)
}
