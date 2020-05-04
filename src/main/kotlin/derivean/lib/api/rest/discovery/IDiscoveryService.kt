package derivean.lib.api.rest.discovery

import derivean.lib.rest.discovery.Discovery
import derivean.lib.rest.discovery.Link
import derivean.lib.rest.discovery.Parameter

interface IDiscoveryService {
	fun register(name: String, path: String, description: String, parameters: List<Parameter> = listOf())

	fun register(map: Map<String, Link>)

	fun discovery(): Discovery
}
