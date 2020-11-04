package derivean.server.rest.root.translation

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.server.rest.root.translation.endpoint.*
import io.ktor.routing.*

class TranslationHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			DeleteEndpoint::class,
			FetchEndpoint::class,
			SearchEndpoint::class,
			PageEndpoint::class,
		)
	}
}
