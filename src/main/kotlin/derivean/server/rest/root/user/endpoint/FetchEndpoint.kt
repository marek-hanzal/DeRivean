package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.user.UserRepository
import io.ktor.routing.*

class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/user",
		"root.user",
		fetchMapper,
		userRepository,
	)
}
