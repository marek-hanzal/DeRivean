package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*

class PlayerPagesEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "pages"
			link = "/player/pages"
			description = "Access to available pages of players (just prepared paging)."
		}
		routing.get("/player/pages") {
			call.respond(storage.read {
				pageService.pages("/player/page/{page}", limit(call), playerRepository)
			})
		}
	}
}
