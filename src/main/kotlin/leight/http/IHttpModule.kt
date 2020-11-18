package leight.http

import io.ktor.routing.*

interface IHttpModule {
	fun install(routing: Routing)
}
