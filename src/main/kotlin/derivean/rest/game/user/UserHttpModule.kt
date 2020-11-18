package derivean.rest.game.user

import derivean.rest.game.user.endpoint.ResourceEndpoint
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

@KtorExperimentalAPI
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			ResourceEndpoint::class,
		)
	}
}
