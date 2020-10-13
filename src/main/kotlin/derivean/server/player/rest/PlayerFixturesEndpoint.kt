package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.storage.IStorage
import derivean.server.player.Player
import io.ktor.application.*
import io.ktor.routing.*
import java.util.*

class PlayerFixturesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage: IStorage by container.lazy()

	override fun install(routing: Routing) {
		routing.get("/player/fixtures/{count}") {
			repeat(call.parameters["count"]!!.toInt()) {
				storage.write {
					Player.new {
						name = UUID.randomUUID().toString()
					}
				}
			}
		}
	}
}
