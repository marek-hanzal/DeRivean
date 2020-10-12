package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.lib.rest.page.PageIndex
import derivean.server.player.PlayerRepository
import io.ktor.application.*
import io.ktor.response.*
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
		routing.get("/player/page/{page}") {
			call.respond(
				storage.read {
					PageIndex.build(linkGenerator) {
						playerRepository.page(0, 100) { uuid ->
							item {
								this.id = uuid.toString()
								this.href = "/player/{id}".replace("{id}", this.id)
							}
						}
					}
				}
			)
		}
	}
}
