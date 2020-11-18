package derivean.rest.game

import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractCreateMapper
import leight.rest.ApplicationRequest
import leight.user.SessionTicket
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractCreateMapper<T, E : UUIDEntity>(container: IContainer) : AbstractCreateMapper<ApplicationRequest<T>, E>(container) {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<SessionTicket>()!!.id) }
}
