package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.HttpServer
import derivean.lib.http.ticket
import derivean.lib.rest.*
import derivean.lib.storage.IStorage
import derivean.lib.user.UserException
import derivean.server.auth.AuthenticatorService
import derivean.server.auth.TicketService
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.sessions.*
import io.ktor.util.*
import java.util.*

@KtorExperimentalAPI
class LoginEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val ticketService: TicketService by container.lazy()
	private val storage: IStorage by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/login".let { url ->
			discovery {
				this.name = "public.user.login"
				this.link = url
				this.description = "Login user"
			}
			routing.authenticate(optional = true) {
				get(url) {
					call.authentication.principal<HttpServer.SessionTicket>()?.let {
						try {
							call.resolve(storage.read {
								userRepository.findByTicket(it.id).let { user ->
									ok(
										Response(
											user.login,
											user.name,
											user.site,
										)
									)
								}
							})
						} catch (e: NoSuchElementException) {
							logger.error(e.message, e)
							call.resolve(unauthorized("Who are you?"))
						}
					} ?: call.resolve(unauthorized("You don't have a valid ticket, bro!"))
				}
			}
			routing.post(url) {
				handle(call) {
					call.receive<Request>().let {
						call.resolve(try {
							/**
							 * Write, because ticket service will generate a new ticket
							 */
							storage.write {
								authenticatorService.authenticate(it.login, it.password).let { user ->
									call.ticket(ticketService.ticketFor(user))
									ok(
										Response(
											user.login,
											user.name,
											user.site,
										)
									)
								}
							}
						} catch (e: UserException) {
							forbidden(ValidationResponse.build {
								message = "Login failed!"
								validation("login", "error", "Check your login")
								validation("password", "error", "And your password")
							})
						} catch (e: Throwable) {
							logger.error(e.message, e)
							internalServerError(ValidationResponse.build {
								message = "Some ugly internal server error happened!"
							})
						}
						)
					}
				}
			}
			routing.delete(url) {
				call.sessions.get<HttpServer.SessionTicket>()?.let { sessionTicket -> storage.write { ticketService.drop(sessionTicket.id) } }
				call.sessions.clear<HttpServer.SessionTicket>()
				call.resolve(ok("You're logged out - see you soon!"))
			}
		}
	}

	data class Request(val login: String, val password: String)
	data class Response(
		val login: String,
		val name: String,
		val site: String?,
	)
}
