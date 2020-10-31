package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class LoginEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val loginMapper: LoginMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/login".let { url ->
			discovery {
				this.name = "public.user.login"
				this.link = url
				this.description = "Login user"
			}
			routing.post(url) {
				resolve(call, loginMapper)
			}
		}
	}
}
