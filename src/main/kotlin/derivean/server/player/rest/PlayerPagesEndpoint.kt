package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPagesEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.application.*
import io.ktor.routing.*

class PlayerPagesEndpoint(container: IContainer) : AbstractPagesEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "pages"
			link = "/player/pages"
			description = "Access to available pages of players (just prepared paging)."
		}
		routing.get("/player/pages") {
			pageService.pages(call, "/player/page/{page}", playerRepository)
		}
	}
}