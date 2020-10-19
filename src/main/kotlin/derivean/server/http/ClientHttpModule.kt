package derivean.server.http

import derivean.lib.container.IContainer
import derivean.lib.server.AbstractHttpModule
import derivean.lib.server.ILinkGenerator
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*

/**
 * Http Client Module responsible for serving UI stuff (client application).
 */
class ClientHttpModule(container: IContainer) : AbstractHttpModule(container) {
	private val linkGenerator: ILinkGenerator by container.lazy()

	override fun install(routing: Routing) {
		routing {
			get("/client.json") {
				call.respond(
					ClientConfigResponse(
						linkGenerator.link("/api/discovery")
					)
				)
			}
		}
	}

	data class ClientConfigResponse(val discovery: String) {
		constructor(discovery: Url) : this(discovery.toString())
	}
}
