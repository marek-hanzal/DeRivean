package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.Href
import derivean.lib.rest.page.PagesIndex
import derivean.lib.storage.IStorage
import derivean.server.player.PlayerRepository
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlin.math.ceil

class PlayerPagesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage: IStorage by container.lazy()
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) {
		discovery {
			group = "player"
			name = "pages"
			link = "/player/pages"
			description = "Access to available pages of players (just prepared paging)."
		}
		routing.get("/player/pages") {
			val href = linkGenerator.link("/player/page/{page}").toString()
			val limit = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else 100
			call.respond(storage.read {
				PagesIndex.build {
					this.total = playerRepository.total()
					this.limit = limit
					repeat(ceil(this.total.toDouble() / this.limit.toDouble()).toInt()) { this.hrefs.add(Href(href.replace("{page}", "$it"))) }
				}
			})
		}
	}
}
