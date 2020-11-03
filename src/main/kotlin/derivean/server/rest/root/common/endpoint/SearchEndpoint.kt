package derivean.server.rest.root.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/search".let { url ->
			discovery {
				this.link = url
				this.name = "root.search"
				this.description = "Fulltext search through everything."
			}
			routing.post(url) {
				resolve(call, searchMapper)
			}
		}
	}
}
