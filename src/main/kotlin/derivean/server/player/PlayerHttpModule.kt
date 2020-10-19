package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.player.rest.PlayerEndpoint
import derivean.server.player.rest.PlayerFixturesEndpoint
import derivean.server.player.rest.PlayerPageEndpoint
import io.ktor.routing.*

class PlayerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PlayerPageEndpoint::class,
			PlayerEndpoint::class,
			PlayerFixturesEndpoint::class,
		)
	}
}
