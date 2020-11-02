package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/update".let { url ->
			discovery {
				name = "root.user.update"
				link = url
				description = "Update an User"
			}
			routing.post(url) {
				resolve(call, updateMapper)
			}
		}
	}
}
