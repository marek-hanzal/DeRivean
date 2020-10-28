package derivean.lib.http.modules

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.lib.mapper.AbstractMapper
import derivean.lib.rest.Response
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.discovery.Link
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class DiscoveryHttpModule(container: IContainer) : AbstractHttpModule(container) {
	private val discoveryService: IDiscoveryService by container.lazy()
	private val discoveryMapper: DiscoveryMapper by container.lazy()

	override fun install(routing: Routing) {
		routing {
			get("/api/discovery") {
				call.resolve(discoveryMapper.map(discoveryService.discovery()))
			}
		}
	}
}

class DiscoveryMapper(container: IContainer) : AbstractMapper<Map<String, Link>, Response<out Any>>(container) {
	override fun map(item: Map<String, Link>): Response<out Any> {
		return ok(item.toSortedMap())
	}
}
