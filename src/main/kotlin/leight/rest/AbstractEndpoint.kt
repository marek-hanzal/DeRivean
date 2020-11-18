@file:Suppress("MemberVisibilityCanBePrivate")

package leight.rest

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.ILinkGenerator
import leight.rest.discovery.IDiscoveryService
import leight.rest.discovery.Link

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	protected val discoveryService: IDiscoveryService by container.lazy()
	protected val linkGenerator: ILinkGenerator by container.lazy()

	protected fun discovery(block: Link.Builder.() -> Unit) = discoveryService.register(block)
}
