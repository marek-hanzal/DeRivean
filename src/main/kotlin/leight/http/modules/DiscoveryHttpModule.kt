package leight.http.modules

import io.ktor.application.*
import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import leight.mapper.AbstractMapper
import leight.rest.Response
import leight.rest.discovery.IDiscoveryService
import leight.rest.discovery.Link
import leight.rest.ok
import leight.rest.resolve

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
	override fun map(item: Map<String, Link>) = ok(item.toSortedMap().map { it.key to DiscoveryLink(it.value.link, it.value.description) }.toMap())

	data class DiscoveryLink(
		val link: String,
		val description: String,
	)
}
