package derivean.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.rest.game.AbstractPageEndpoint
import derivean.server.user.UserKingdomRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		::user,
		"/api/game/user/kingdom",
		"game.user.kingdom",
		userKingdomRepository,
		fetchMapper,
	)
}
