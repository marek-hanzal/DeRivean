package derivean.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.KingdomBuildingRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomBuildingRepository: KingdomBuildingRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"kingdom",
		"/api/root/kingdom/{kingdom}/building",
		"root.kingdom.building",
		kingdomBuildingRepository,
		fetchMapper,
	)
}
