package derivean.rest.root.common

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.common.endpoint.SearchEndpoint
import derivean.rest.root.common.endpoint.StatisticsEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CommonHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			SearchEndpoint::class,
			StatisticsEndpoint::class,
		)
	}
}
