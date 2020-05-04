package derivean.lib.rest.discovery

import derivean.lib.api.container.IContainer
import derivean.lib.api.rest.discovery.IDiscoveryService
import derivean.lib.api.server.ILinkGenerator

class DiscoveryService(container: IContainer) : IDiscoveryService {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val discovery: MutableMap<String, Link> = mutableMapOf()

	/**
	 * register a new named discovery path
	 */
	override fun register(name: String, path: String, description: String, parameters: List<Parameter>) {
		discovery[name] = Link(name, linkGenerator.link(path), description, parameters)
	}

	/**
	 * set all items from the given map
	 */
	override fun register(map: Map<String, Link>) = discovery.putAll(map)

	override fun discovery(): Discovery = Discovery(discovery)
}
