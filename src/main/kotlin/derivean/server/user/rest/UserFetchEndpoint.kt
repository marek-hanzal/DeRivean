package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.user.UserRepository
import derivean.server.user.rest.mapper.UserFetchMapper
import io.ktor.routing.*

class UserFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val userFetchMapper: UserFetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"user",
		userFetchMapper,
		userRepository,
	)
}
