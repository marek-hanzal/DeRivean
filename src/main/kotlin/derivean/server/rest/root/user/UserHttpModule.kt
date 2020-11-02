package derivean.server.rest.root.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.user.endpoint.AttributesEndpoint
import derivean.server.rest.root.user.endpoint.CreateEndpoint
import derivean.server.rest.root.user.endpoint.FetchEndpoint
import derivean.server.rest.root.user.endpoint.PageEndpoint
import io.ktor.routing.*

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			AttributesEndpoint::class,
			CreateEndpoint::class,
			FetchEndpoint::class,
			PageEndpoint::class,
		)
	}
}
