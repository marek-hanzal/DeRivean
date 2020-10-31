package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.user.UserRepository
import io.ktor.routing.*

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
