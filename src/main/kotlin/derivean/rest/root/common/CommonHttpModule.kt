package derivean.rest.root.common

import derivean.rest.root.common.endpoint.SearchEndpoint
import derivean.rest.root.common.endpoint.StatisticsEndpoint
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
