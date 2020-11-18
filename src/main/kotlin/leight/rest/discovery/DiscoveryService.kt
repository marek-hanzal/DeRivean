package leight.rest.discovery

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.ILinkGenerator

class DiscoveryService(container: IContainer) : AbstractService(container), IDiscoveryService {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val discovery: MutableMap<String, Link> = mutableMapOf()

	/**
	 * Register a new named discovery path.
	 */
	override fun register(block: Link.Builder.() -> Unit) = Link.build(linkGenerator, block).also {
		discovery[it.name] = it
	}

	override fun discovery() = discovery.toMap()
}
