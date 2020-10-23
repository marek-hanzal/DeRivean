package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.user.rest.mapper.UserCreateMapper
import io.ktor.application.*
import io.ktor.routing.*

class UserCreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val userCreateMapper: UserCreateMapper by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			this.name = "create"
			this.group = "user"
			this.description = "Create a new User"
			this.link = "/api/user/create"
		}
		routing.post("/api/user/create") {
			resolve(call, userCreateMapper)
		}
	}
}
