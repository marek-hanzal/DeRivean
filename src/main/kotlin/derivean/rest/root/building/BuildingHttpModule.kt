package derivean.rest.root.building

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.building.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class BuildingHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			FetchEndpoint::class,
			PageEndpoint::class,
			DeleteEndpoint::class,
			AttributesEndpoint::class,
		)
	}
}