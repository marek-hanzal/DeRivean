package derivean.rest.game

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.lib.user.SessionTicket
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "game", "root") {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<SessionTicket>()!!.id) }.id.toString()
}
