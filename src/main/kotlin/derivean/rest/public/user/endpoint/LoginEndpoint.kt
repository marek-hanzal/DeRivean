package derivean.rest.public.user.endpoint

import derivean.server.auth.AuthenticatorService
import derivean.server.auth.TicketService
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.sessions.*
import io.ktor.util.*
import leight.container.IContainer
import leight.rest.*
import leight.storage.IStorage
import leight.user.SessionTicket
import leight.user.UserException
import leight.user.ticket

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
					call.authentication.principal<SessionTicket>()?.let {
						call.handle(logger, {
							storage.read {
								userRepository.findByTicket(it.id).let { user ->
									ok(
										Response(
											user.login,
											user.name,
											user.site,
										)
									)
								}
							}
						}) {
							when (it) {
								is NoSuchElementException -> {
									logger.error(it.message, it)
									unauthorized("Who are you?")
								}
								else -> null
							}
						}
					} ?: call.resolve(unauthorized("You don't have a valid ticket, bro!"))
				}
			}
			routing.post(url) {
				call.handle(logger, {
					receive<Request>().let {
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
					}
				}) {
					when (it) {
						is UserException -> {
							forbidden(ValidationResponse.build {
								message = "Login failed!"
								validation("login", "error", "Check your login")
								validation("password", "error", "And your password")
							})
						}
						else -> null
					}
				}
			}
			routing.delete(url) {
				call.handle(logger) {
					call.sessions.get<SessionTicket>()?.let { sessionTicket -> storage.write { ticketService.drop(sessionTicket.id) } }
					call.sessions.clear<SessionTicket>()
					ok("You're logged out - see you soon!")
				}
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
