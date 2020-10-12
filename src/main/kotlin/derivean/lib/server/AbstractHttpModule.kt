package derivean.lib.server

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.rest.IEndpoint
import io.ktor.routing.*
import mu.KotlinLogging
import kotlin.reflect.KClass

abstract class AbstractHttpModule(container: IContainer) : AbstractService(container), IHttpModule {
	protected val logger = KotlinLogging.logger(this::class.qualifiedName!!)

	fun <T : IEndpoint> install(routing: Routing, vararg endpoints: KClass<T>) {
		for (endpoint in endpoints) {
			container.create(endpoint).install(routing)
		}
	}
}
