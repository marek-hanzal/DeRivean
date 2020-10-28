package derivean.server.rest.public.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.public.user.endpoint.LoginEndpoint
import derivean.server.rest.public.user.endpoint.RegisterEndpoint
import io.ktor.routing.*

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			RegisterEndpoint::class,
			LoginEndpoint::class,
		)
	}
}
