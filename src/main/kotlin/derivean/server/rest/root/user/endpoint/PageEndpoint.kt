package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.server.rest.root.AbstractPageEndpoint
import derivean.server.user.UserRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val userRepository: UserRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"/api/root/user",
		"root.user",
		userRepository,
		fetchMapper,
	)
}
