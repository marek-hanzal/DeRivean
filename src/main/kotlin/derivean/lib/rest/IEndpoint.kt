package derivean.lib.rest

import derivean.lib.config.IConfigurable
import io.ktor.routing.*

interface IEndpoint : IConfigurable {
	fun install(routing: Routing)
}
