package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.created
import derivean.server.user.rest.mapper.UserCreateMapper
import io.ktor.application.*
import io.ktor.request.*
import io.ktor.routing.*

class UserCreateEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val userCreateMapper: UserCreateMapper by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			this.name = "create"
			this.group = "user"
			this.description = "Create a new User"
			this.link = "/api/user/create"
		}
		routing.post("/api/user/create") {
			handle(call) {
				created(linkGenerator.link("/api/user/${userCreateMapper.resolve(receive()).id}"))
			}
		}
	}
}