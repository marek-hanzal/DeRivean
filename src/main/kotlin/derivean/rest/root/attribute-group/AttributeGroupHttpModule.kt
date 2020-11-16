package derivean.rest.root.`attribute-group`

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.`attribute-group`.endpoint.PageEndpoint
import io.ktor.routing.*

class AttributeGroupHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PageEndpoint::class,
		)
	}
}
