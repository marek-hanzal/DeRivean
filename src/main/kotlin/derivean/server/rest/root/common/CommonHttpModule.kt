package derivean.server.rest.root.common

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.common.endpoint.SearchEndpoint
import derivean.server.rest.root.common.endpoint.StatisticEndpoint
import io.ktor.routing.*

class CommonHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			SearchEndpoint::class,
			StatisticEndpoint::class,
		)
	}
}
