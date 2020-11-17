package derivean.rest.game

import derivean.lib.container.IContainer
import derivean.lib.user.SessionTicket
import derivean.rest.common.AbstractActionMapper
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*

@KtorExperimentalAPI
abstract class AbstractActionMapper<T>(container: IContainer) : AbstractActionMapper<T>(container) {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<SessionTicket>()!!.id) }
}
