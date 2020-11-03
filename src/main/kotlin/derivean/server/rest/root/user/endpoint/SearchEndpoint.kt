package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class SearchEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val searchMapper: SearchMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/search".let { url ->
			discovery {
				this.name = "root.user.search"
				this.description = "Search for user(s) filtered by an expression."
				this.link = url
			}
			routing.post(url) {
				resolve(call, searchMapper)
			}
		}
	}
}
