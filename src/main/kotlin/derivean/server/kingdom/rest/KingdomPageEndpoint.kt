package derivean.server.kingdom.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.rest.mapper.KingdomFetchMapper
import io.ktor.routing.*

class KingdomPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"kingdom",
		kingdomRepository,
		kingdomFetchMapper.toMapper(),
	)
}
