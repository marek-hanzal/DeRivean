package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.routing.*

class PlayerPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"/player",
		playerRepository,
		"player",
		"Access to selected page of players.",
	)
}
