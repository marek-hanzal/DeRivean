@file:Suppress("MemberVisibilityCanBePrivate")

package derivean.lib.server

import derivean.lib.container.IContainer
import mu.KotlinLogging

abstract class AbstractHttpModule(protected val container: IContainer) : IHttpModule {
	protected val logger = KotlinLogging.logger(this::class.qualifiedName!!)
}
