package derivean.rest.game.kingdom.endpoint

import derivean.rest.game.AbstractPageEndpoint
import derivean.storage.repository.UserKingdomRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer

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
