package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import io.ktor.application.*
import io.ktor.routing.*

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/update".let { url ->
			discovery {
				name = "root.hero.update"
				link = url
				description = "Update a Hero"
			}
			routing.post(url) {
				resolve(call, updateMapper)
			}
		}
	}
}
