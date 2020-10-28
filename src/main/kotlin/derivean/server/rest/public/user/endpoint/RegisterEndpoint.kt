package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.public.mapper.UserCreateMapper
import io.ktor.application.*
import io.ktor.routing.*

class RegisterEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val userCreateMapper: UserCreateMapper by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			this.namespace = "public"
			this.name = "create"
			this.group = "user"
			this.description = "Create a new User"
			this.link = "/api/public/user/register"
		}
		routing.post("/api/public/user/register") {
			resolve(call, userCreateMapper)
		}
	}
}
