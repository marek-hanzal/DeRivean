package leight.http.modules

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import leight.http.HttpServerConfig
import leight.http.ILinkGenerator

/**
 * Http Client Module responsible for serving UI stuff (client application).
 */
class ClientHttpModule(container: IContainer) : AbstractHttpModule(container) {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val httpServerConfig: HttpServerConfig by container.lazy()

	override fun install(routing: Routing) {
		routing {
			get(httpServerConfig.client) {
				call.respond(
					ClientConfigResponse(
						linkGenerator.link(httpServerConfig.discovery)
					)
				)
			}
		}
	}

	data class ClientConfigResponse(val discovery: String) {
		constructor(discovery: Url) : this(discovery.toString())
	}
}
