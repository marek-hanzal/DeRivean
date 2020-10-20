package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.server.user.rest.mapper.UserLoginMapper
import io.ktor.application.*
import io.ktor.routing.*

class UserLoginEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val userLoginMapper: UserLoginMapper by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			this.name = "login"
			this.group = "user"
			this.description = "Login user"
			this.link = "/api/user/login"
		}
		routing.post("/api/user/login") {
			try {
				resolve(call, userLoginMapper) {
					ok(this)
				}
			} catch (e: Throwable) {
				call.resolve(internalServerError("Internal Server Error"))
			}
		}
	}
}