package derivean.rest.game

import derivean.lib.container.IContainer
import derivean.lib.http.HttpServer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "game", "root") {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<HttpServer.SessionTicket>()!!.id) }.id.toString()
}
