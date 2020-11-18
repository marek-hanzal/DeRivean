package derivean.rest.game

import derivean.rest.common.AbstractActionMapper
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*
import leight.container.IContainer
import leight.user.SessionTicket

@KtorExperimentalAPI
abstract class AbstractActionMapper<T>(container: IContainer) : AbstractActionMapper<T>(container) {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<SessionTicket>()!!.id) }
}
