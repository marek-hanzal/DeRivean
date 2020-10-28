package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.rest.root.mapper.UserFetchMapper
import derivean.server.user.UserRepository
import io.ktor.routing.*

class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val userRepository: UserRepository by container.lazy()
	private val userFetchMapper: UserFetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"/api/root/user",
		"root.user",
		userRepository,
		userFetchMapper,
	)
}
