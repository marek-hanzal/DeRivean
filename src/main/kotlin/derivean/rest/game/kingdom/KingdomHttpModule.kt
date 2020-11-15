package derivean.rest.game.kingdom

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.game.kingdom.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*

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
