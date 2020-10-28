package derivean.lib.rest.discovery

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.http.ILinkGenerator

class DiscoveryService(container: IContainer) : AbstractService(container), IDiscoveryService {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val discovery: MutableMap<String, Link> = mutableMapOf()

	/**
	 * Register a new named discovery path.
	 */
	override fun register(block: Link.Builder.() -> Unit) = Link.build(linkGenerator, block).also {
		discovery["${it.namespace}.${it.group}.${it.name}"] = it
	}

	override fun discovery() = discovery.toMap()
}
