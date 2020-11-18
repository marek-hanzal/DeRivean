package derivean.rest.game.building

import derivean.rest.game.building.endpoint.FetchEndpoint
import derivean.rest.game.building.endpoint.PageEndpoint
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
