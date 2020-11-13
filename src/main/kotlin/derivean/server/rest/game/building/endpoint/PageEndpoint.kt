package derivean.server.rest.game.building.endpoint

import derivean.lib.container.IContainer
import derivean.server.kingdom.KingdomBuildingRepository
import derivean.server.rest.game.AbstractPageEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomBuildingRepository: KingdomBuildingRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"kingdom",
		"/api/game/kingdom/{kingdom}/building",
		"game.kingdom.building",
		kingdomBuildingRepository,
		fetchMapper,
	)
}
