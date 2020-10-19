package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import derivean.server.user.rest.UserCreateEndpoint
import io.ktor.routing.*

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			UserCreateEndpoint::class,
		)
	}
}