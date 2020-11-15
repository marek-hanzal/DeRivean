package derivean.rest.public

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.public.common.CommonHttpModule
import derivean.rest.public.user.UserHttpModule
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PublicHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			CommonHttpModule::class,
			UserHttpModule::class,
		)
	}
}
