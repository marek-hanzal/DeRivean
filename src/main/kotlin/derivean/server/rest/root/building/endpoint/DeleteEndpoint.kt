package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/building/delete".let { url ->
			discovery {
				name = "root.building.delete"
				link = url
				description = "Delete a Building"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}
