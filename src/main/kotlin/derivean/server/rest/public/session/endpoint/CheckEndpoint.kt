package derivean.server.rest.public.session.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.HttpServer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.lib.rest.unauthorized
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CheckEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/public/session/check".let { url ->
			discovery {
				this.link = url
				this.name = "public.session.check"
				this.description = "Do a check with valid/invalid/missing ticket to see if session exists."
			}
			routing.authenticate(optional = true) {
				get(url) {
					call.authentication.principal<HttpServer.SessionTicket>()?.let {
						call.resolve(ok("You are welcome on this server!"))
					} ?: call.resolve(unauthorized("You don't have a valid ticket, bro!"))
				}
			}
		}

	}
}
