package derivean.rest.public

import derivean.rest.public.common.CommonHttpModule
import derivean.rest.public.user.UserHttpModule
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
