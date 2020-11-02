package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/create".let { url ->
			discovery {
				this.name = "root.user.create"
				this.link = url
				this.description = "Create a new User"
			}
			routing.post(url) {
				resolve(call, createMapper)
			}
		}
	}
}
