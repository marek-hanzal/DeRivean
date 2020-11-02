package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/delete".let { url ->
			discovery {
				name = "root.hero.delete"
				link = url
				description = "Delete a Hero"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}
