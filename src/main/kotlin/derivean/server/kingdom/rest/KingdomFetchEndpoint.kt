package derivean.server.kingdom.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.rest.mapper.KingdomFetchMapper
import io.ktor.routing.*

class KingdomFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"kingdom",
		kingdomFetchMapper,
		kingdomRepository,
	)
}
