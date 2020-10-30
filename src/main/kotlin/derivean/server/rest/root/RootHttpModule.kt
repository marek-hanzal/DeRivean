package derivean.server.rest.root

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.building.BuildingHttpModule
import derivean.server.rest.root.entity.EntityHttpModule
import derivean.server.rest.root.kingdom.KingdomHttpModule
import derivean.server.rest.root.user.UserHttpModule
import io.ktor.routing.*

class RootHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			EntityHttpModule::class,
			KingdomHttpModule::class,
			BuildingHttpModule::class,
			UserHttpModule::class,
		)
	}
}
