package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.building.BuildingRepository
import derivean.server.rest.root.mapper.BuildingFetchMapper
import io.ktor.routing.*

class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val buildingFetchMapper: BuildingFetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/building",
		"root.building",
		buildingFetchMapper,
		buildingRepository,
	)
}
