package leight.container

import leight.config.AbstractConfigurable
import mu.KotlinLogging

/**
 * Just placeholder class for marking ContainerServices as they accepts just one parameter.
 */
abstract class AbstractService(protected val container: IContainer) : AbstractConfigurable() {
	val logger = KotlinLogging.logger(this::class.qualifiedName!!)
}
