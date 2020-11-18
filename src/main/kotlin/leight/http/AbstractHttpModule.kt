package leight.http

import io.ktor.routing.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass

abstract class AbstractHttpModule(container: IContainer) : AbstractService(container), IHttpModule {
	fun install(routing: Routing, vararg endpoints: KClass<out IEndpoint>) {
		for (endpoint in endpoints) {
			container.create(endpoint).install(routing)
		}
	}

	fun modules(routing: Routing, vararg modules: KClass<out IHttpModule>) {
		modules.forEach {
			container.create(it).install(routing)
		}
	}
}
