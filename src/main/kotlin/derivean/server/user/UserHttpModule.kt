package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.user.rest.UserCreateEndpoint
import derivean.server.user.rest.UserFetchEndpoint
import derivean.server.user.rest.UserPageEndpoint
import io.ktor.routing.*

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			UserCreateEndpoint::class,
			UserFetchEndpoint::class,
			UserPageEndpoint::class,
		)
	}
}
