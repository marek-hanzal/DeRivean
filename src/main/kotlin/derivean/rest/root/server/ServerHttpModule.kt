package derivean.rest.root.server

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.server.endpoint.SitesEndpoint
import derivean.rest.root.server.endpoint.ValidationEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class ServerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			ValidationEndpoint::class,
			SitesEndpoint::class,
		)
	}
}
