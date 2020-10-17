package derivean.server.http

import derivean.lib.container.IContainer
import derivean.lib.rest.discovery
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.server.AbstractHttpModule
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
