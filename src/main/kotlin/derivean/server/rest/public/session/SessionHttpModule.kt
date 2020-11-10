package derivean.server.rest.public.session

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.public.session.endpoint.CheckEndpoint
import io.ktor.routing.*

class SessionHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CheckEndpoint::class,
		)
	}
}
