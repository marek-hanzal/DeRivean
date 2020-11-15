package derivean.rest.game.building

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.game.building.endpoint.FetchEndpoint
import derivean.rest.game.building.endpoint.PageEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class BuildingHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			FetchEndpoint::class,
			PageEndpoint::class,
		)
	}
}
