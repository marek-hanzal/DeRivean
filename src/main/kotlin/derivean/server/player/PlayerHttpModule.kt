package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import derivean.server.player.rest.PlayerListEndpoint
import io.ktor.routing.*

class PlayerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PlayerListEndpoint::class,
		)
	}
}
