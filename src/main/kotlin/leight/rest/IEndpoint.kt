package leight.rest

import io.ktor.routing.*
import leight.config.IConfigurable

interface IEndpoint : IConfigurable {
	fun install(routing: Routing)
}
