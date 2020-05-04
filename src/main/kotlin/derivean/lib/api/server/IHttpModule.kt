package derivean.lib.api.server

import io.ktor.routing.Routing

interface IHttpModule {
	fun install(routing: Routing)
}
