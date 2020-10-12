package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.badRequest
import io.ktor.application.*
import io.ktor.routing.*

class PlayerEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "fetch"
			link = "/player/{id}"
			description = "Get player's data."
		}
		routing.get("/player") {
			call.badRequest("Missing id parameter in url: [/player/{id}].")
		}
		routing.get("/player/{id}") {

		}
	}
}
