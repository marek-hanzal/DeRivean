package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import io.ktor.routing.*

class PlayerListEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "list"
			link = "/player/list"
			description = "Access to (unfiltered) list of players with integrated paging support."
		}
	}
}
