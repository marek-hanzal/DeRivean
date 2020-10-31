package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/create".let { url ->
			discovery {
				name = "root.kingdom.create"
				link = url
				description = "Creates a new Kingdom"
			}
			routing.post(url) {
				resolve(call, createMapper)
			}
		}
	}
}
