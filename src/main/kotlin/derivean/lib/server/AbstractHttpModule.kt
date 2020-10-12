package derivean.lib.server

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import mu.KotlinLogging

abstract class AbstractHttpModule(container: IContainer) : AbstractService(container), IHttpModule {
	protected val logger = KotlinLogging.logger(this::class.qualifiedName!!)
}
