package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.rest.root.kingdom.endpoint.FetchMapper
import derivean.server.user.UserKingdomRepository
import io.ktor.routing.*

class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"kingdom",
		"/api/root/kingdom/{kingdom}/building",
		"root.kingdom.building",
		userKingdomRepository,
		fetchMapper,
	)
}
