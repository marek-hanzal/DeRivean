package derivean.rest.root.attribute

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.attribute.endpoint.AttributeGroupListEndpoint
import io.ktor.routing.*

class AttributeHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			AttributeGroupListEndpoint::class,
		)
	}
}
