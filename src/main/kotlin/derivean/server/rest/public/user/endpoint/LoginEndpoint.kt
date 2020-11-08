package derivean.server.rest.public.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.ticket
import derivean.lib.rest.*
import derivean.lib.storage.IStorage
import derivean.lib.user.UserException
import derivean.server.auth.AuthenticatorService
import derivean.server.auth.TicketService
import io.ktor.application.*
import io.ktor.request.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class LoginEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val ticketService: TicketService by container.lazy()
	private val storage: IStorage by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/user/login".let { url ->
			discovery {
				this.name = "public.user.login"
				this.link = url
				this.description = "Login user"
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
									ok(Response(user.login, user.name, user.site!!))
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
		}
	}

	data class Request(val login: String, val password: String)
	data class Response(
		val login: String,
		val name: String,
		val site: String,
	)
}
