package derivean.lib.rest.discovery

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.server.ILinkGenerator

class DiscoveryService(container: IContainer) : AbstractService(container), IDiscoveryService {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val discovery: MutableMap<String, Link> = mutableMapOf()

	/**
	 * register a new named discovery path
	 */
	override fun register(block: Link.Builder.() -> Unit) = Link.build(block).also { discovery[it.name] = it }

	override fun discovery(): Discovery = Discovery(discovery)
}
