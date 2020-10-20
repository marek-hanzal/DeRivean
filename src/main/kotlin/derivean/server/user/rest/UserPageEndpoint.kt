package derivean.server.user.rest

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.user.UserRepository
import derivean.server.user.rest.mapper.UserFetchMapper
import io.ktor.routing.*

class UserPageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val userRepository: UserRepository by container.lazy()
	private val userFetchMapper: UserFetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		userRepository.table.tableName,
		userRepository,
		userFetchMapper,
	)
}
