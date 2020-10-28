package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.rest.public.mapper.UserLoginMapper
import io.ktor.application.*
import io.ktor.routing.*

class LoginEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val userLoginMapper: UserLoginMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/login".let { url ->
			discovery {
				this.name = "public.user.login"
				this.link = url
				this.description = "Login user"
			}
			routing.post(url) {
				resolve(call, userLoginMapper)
			}
		}
	}
}
