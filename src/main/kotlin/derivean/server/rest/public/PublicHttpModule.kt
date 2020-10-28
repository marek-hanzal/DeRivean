package derivean.server.rest.public

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.public.user.UserHttpModule
import io.ktor.routing.*

class PublicHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			UserHttpModule::class,
		)
	}
}
