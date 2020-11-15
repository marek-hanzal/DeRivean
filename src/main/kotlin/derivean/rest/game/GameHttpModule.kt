package derivean.rest.game

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.game.building.BuildingHttpModule
import derivean.rest.game.kingdom.KingdomHttpModule
import derivean.rest.game.user.UserHttpModule
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
