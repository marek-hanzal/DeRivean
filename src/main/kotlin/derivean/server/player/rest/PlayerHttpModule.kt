package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import io.ktor.routing.*

class PlayerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PlayerListEndpoint::class,
		)
	}
}
