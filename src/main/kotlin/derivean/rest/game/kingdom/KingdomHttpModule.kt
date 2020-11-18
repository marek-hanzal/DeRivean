package derivean.rest.game.kingdom

import derivean.rest.game.kingdom.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

@KtorExperimentalAPI
class KingdomHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			DeleteEndpoint::class,
			FetchEndpoint::class,
			PageEndpoint::class,
			StatisticsEndpoint::class,
		)
	}
}
