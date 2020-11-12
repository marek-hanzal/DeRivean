package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.user.UserKingdomRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "root") {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"user",
		"/api/root/user/{user}/kingdom",
		"root.user.kingdom",
		userKingdomRepository,
		fetchMapper,
	)
}
