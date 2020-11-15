package derivean.rest.public.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.public.user.endpoint.LoginEndpoint
import derivean.rest.public.user.endpoint.RegisterEndpoint
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			RegisterEndpoint::class,
			LoginEndpoint::class,
		)
	}
}