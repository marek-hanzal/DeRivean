package derivean.rest.game

import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*
import leight.container.IContainer
import leight.rest.page.AbstractPageEndpoint
import leight.user.SessionTicket

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "game", "root") {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<SessionTicket>()!!.id) }.id.toString()
}
