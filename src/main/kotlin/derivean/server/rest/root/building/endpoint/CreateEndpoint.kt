package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/building/create".let { url ->
			discovery {
				name = "root.building.create"
				link = url
				description = "Creates a new Building"
			}
			routing.post(url) {
				resolve(call, createMapper)
			}
		}
	}
}