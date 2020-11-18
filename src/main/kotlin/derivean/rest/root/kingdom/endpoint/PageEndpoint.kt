package derivean.rest.root.kingdom.endpoint

import derivean.rest.root.AbstractPageEndpoint
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
		"user",
		"/api/root/user/{user}/kingdom",
		"root.user.kingdom",
		userKingdomRepository,
		fetchMapper,
	)
}
