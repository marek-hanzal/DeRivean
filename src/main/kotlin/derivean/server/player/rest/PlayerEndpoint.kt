package derivean.server.player.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.player.PlayerRepository
import derivean.server.player.rest.mapper.PlayerFetchMapper
import io.ktor.routing.*

class PlayerEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val playerFetchMapper: PlayerFetchMapper by container.lazy()
	private val playerRepository: PlayerRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/player",
		playerFetchMapper,
		playerRepository,
		"player",
		"Get player's data.",
	)
}
