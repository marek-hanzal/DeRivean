package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.root.mapper.BuildingUpdateMapper
import io.ktor.application.*
import io.ktor.routing.*

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val buildingUpdateMapper: BuildingUpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/building/update".let { url ->
			discovery {
				name = "root.building.update"
				link = url
				description = "Update a Building"
			}
			routing.post(url) {
				resolve(call, buildingUpdateMapper)
			}
		}
	}
}
