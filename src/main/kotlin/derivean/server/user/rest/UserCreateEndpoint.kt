package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import io.ktor.routing.*

class UserCreateEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		discovery {
			this.name = "create"
			this.group = "user"
			this.description = "Create a new User"
			this.link = "/api/user/create"
		}
		routing.post("/api/user/create") {
			TODO("Finish user create")
		}
	}
}
