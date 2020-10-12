package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.badRequest
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.application.*
import io.ktor.routing.*

class PlayerPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "page"
			link = "/player/page"
			description = "Access to selected page of players."
		}
		routing.get("/player/page") {
			call.badRequest("Missing page parameter in url: [/player/page/{page}].")
		}
		routing.get("/player/page/{page}") {
			pageService.page(call, "/player/{id}", playerRepository)
		}
	}
}
