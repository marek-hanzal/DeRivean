package derivean.rest.public.user

import derivean.rest.public.user.endpoint.LoginEndpoint
import derivean.rest.public.user.endpoint.RegisterEndpoint
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
