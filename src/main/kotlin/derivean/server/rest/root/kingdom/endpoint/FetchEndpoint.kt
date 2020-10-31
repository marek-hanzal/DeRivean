package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.kingdom.KingdomRepository
import io.ktor.routing.*

class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/kingdom",
		"root.kingdom",
		fetchMapper,
		kingdomRepository,
	)
}
