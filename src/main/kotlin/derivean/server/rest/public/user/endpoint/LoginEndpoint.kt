package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.public.mapper.UserLoginMapper
import io.ktor.application.*
import io.ktor.routing.*

class LoginEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val userLoginMapper: UserLoginMapper by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			this.namespace = "public"
			this.name = "login"
			this.group = "user"
			this.description = "Login user"
			this.link = "/api/public/user/login"
		}
		routing.post("/api/public/user/login") {
			resolve(call, userLoginMapper)
		}
	}
}
