package derivean.rest.root.server

import derivean.rest.root.server.endpoint.SitesEndpoint
import derivean.rest.root.server.endpoint.ValidationEndpoint
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
