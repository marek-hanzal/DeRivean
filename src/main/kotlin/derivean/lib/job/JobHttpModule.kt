package derivean.lib.job

import derivean.lib.api.container.IContainer
import derivean.lib.server.AbstractHttpModule
import io.ktor.routing.Routing

class JobHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
