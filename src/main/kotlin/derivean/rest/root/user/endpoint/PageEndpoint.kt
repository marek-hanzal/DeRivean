package derivean.rest.root.user.endpoint

import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.UserRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer

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
