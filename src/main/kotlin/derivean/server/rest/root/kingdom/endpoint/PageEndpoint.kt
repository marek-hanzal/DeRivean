package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.rest.root.mapper.KingdomFetchMapper
import derivean.server.user.UserKingdomRepository
import io.ktor.routing.*

class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"user",
		"/api/root/user/{user}/kingdom",
		"root.user.kingdom",
		userKingdomRepository,
		kingdomFetchMapper,
	)
}
