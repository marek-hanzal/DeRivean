package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class RegisterEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val registerMapper: RegisterMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/register".let { url ->
			discovery {
				this.name = "public.user.register"
				this.link = url
				this.description = "Register a new User"
			}
			routing.post(url) {
				resolve(call, registerMapper)
			}
		}
	}
}
