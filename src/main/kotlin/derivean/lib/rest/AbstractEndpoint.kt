@file:Suppress("MemberVisibilityCanBePrivate")

package derivean.lib.rest

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.http.ILinkGenerator
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.discovery.Link

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	protected val discoveryService: IDiscoveryService by container.lazy()
	protected val linkGenerator: ILinkGenerator by container.lazy()

	protected fun discovery(block: Link.Builder.() -> Unit) = discoveryService.register(block)
}
