package derivean.server.rest.game

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.game.building.BuildingHttpModule
import derivean.server.rest.game.kingdom.KingdomHttpModule
import derivean.server.rest.game.user.UserHttpModule
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class GameHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			KingdomHttpModule::class,
			BuildingHttpModule::class,
			UserHttpModule::class,
		)
	}
}
