package derivean.lib.rest

import io.ktor.routing.Routing

interface IEndpoint {
	fun install(routing: Routing)
}
