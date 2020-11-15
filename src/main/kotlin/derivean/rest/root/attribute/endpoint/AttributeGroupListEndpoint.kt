package derivean.rest.root.attribute.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import io.ktor.routing.*

class AttributeGroupListEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/attribute/group/list".let { url ->
			discovery {
				this.link = url
				this.name = "root.attribute.group.list"
				this.description = "Return all attribute groups in a simple list."
			}
		}
		TODO("Not yet implemented")
	}
}
