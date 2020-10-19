package derivean.lib.http.modules

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.lib.rest.discovery
import derivean.lib.rest.discovery.IDiscoveryService
import io.ktor.application.*
import io.ktor.routing.*

class DiscoveryHttpModule(container: IContainer) : AbstractHttpModule(container) {
	private val discoveryService: IDiscoveryService by container.lazy()

	override fun install(routing: Routing) {
		routing {
			get("/api/discovery") {
				call.discovery(discoveryService.discovery())
			}
		}
	}
}
