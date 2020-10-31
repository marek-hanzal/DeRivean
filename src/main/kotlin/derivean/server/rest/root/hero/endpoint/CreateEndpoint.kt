package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/create".let { url ->
			discovery {
				name = "root.hero.create"
				link = url
				description = "Creates a new Hero"
			}
			routing.post(url) {
				resolve(call, createMapper)
			}
		}
	}
}
