package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPagesEndpoint
import derivean.server.player.PlayerRepository
import io.ktor.routing.*

class PlayerPagesEndpoint(container: IContainer) : AbstractPagesEndpoint(container) {
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) = pages(
		routing,
		"player",
		playerRepository,
	)
}
