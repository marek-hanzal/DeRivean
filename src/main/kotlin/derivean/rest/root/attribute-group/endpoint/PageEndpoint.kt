package derivean.rest.root.`attribute-group`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import io.ktor.routing.*

class PageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/attribute-group/page".let { url ->
			discovery {
				this.link = url
				this.name = "root.attribute-group.list"
				this.description = "Return all attribute groups."
			}
		}
	}
}
