package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.routing.*

class PlayerPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "pages"
			link = "/player/pages"
			description = "Access to available pages of players (just prepared paging)."
		}
		routing.get("/player/page/{page}") {

		}
	}
}
