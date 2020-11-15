package derivean.rest.public.common

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.public.common.endpoint.TranslationEndpoint
import io.ktor.routing.*

class CommonHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TranslationEndpoint::class,
		)
	}
}