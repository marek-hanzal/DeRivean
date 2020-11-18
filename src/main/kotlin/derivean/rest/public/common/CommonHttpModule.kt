package derivean.rest.public.common

import derivean.rest.public.common.endpoint.TranslationEndpoint
import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

class CommonHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TranslationEndpoint::class,
		)
	}
}
