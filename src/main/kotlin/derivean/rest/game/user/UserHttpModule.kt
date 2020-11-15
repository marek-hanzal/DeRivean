package derivean.rest.game.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.game.user.endpoint.ResourceEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			ResourceEndpoint::class,
		)
	}
}
