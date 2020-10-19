package derivean.lib.http

import io.ktor.routing.*

interface IHttpModule {
	fun install(routing: Routing)
}
