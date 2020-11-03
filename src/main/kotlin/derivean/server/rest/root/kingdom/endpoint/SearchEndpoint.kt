package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/search".let { url ->
			discovery {
				this.name = "root.kingdom.search"
				this.description = "Search for kingdom(s) filtered by an expression."
				this.link = url
			}
			routing.post(url) {
				resolve(call, searchMapper)
			}
		}
	}
}
