package derivean.rest.root.`attribute-type`

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.`attribute-type`.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class AttributeTypeHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			FetchEndpoint::class,
			UpdateEndpoint::class,
			DeleteEndpoint::class,
			PageEndpoint::class,
		)
	}
}
