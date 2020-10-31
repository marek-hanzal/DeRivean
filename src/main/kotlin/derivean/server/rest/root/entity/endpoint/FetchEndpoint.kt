package derivean.server.rest.root.entity.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.entity.EntityRepository
import io.ktor.routing.*

class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val entityRepository: EntityRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/entity",
		"root.entity",
		fetchMapper,
		entityRepository,
	)
}
