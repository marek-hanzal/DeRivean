package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/delete".let { url ->
			discovery {
				name = "root.user.delete"
				link = url
				description = "Delete an User"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}
