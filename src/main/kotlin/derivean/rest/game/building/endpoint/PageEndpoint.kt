package derivean.rest.game.building.endpoint

import derivean.rest.game.AbstractPageEndpoint
import derivean.storage.repository.KingdomBuildingRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer

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
