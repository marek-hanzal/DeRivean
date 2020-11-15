package derivean.rest.game

import derivean.lib.container.IContainer
import derivean.lib.http.HttpServer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.ApplicationRequest
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.util.*
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractCreateMapper<T, E : UUIDEntity>(container: IContainer) : AbstractCreateMapper<ApplicationRequest<T>, E>(container) {
	protected val userRepository: UserRepository by container.lazy()

	fun user(call: ApplicationCall) = storage.read { userRepository.findByTicket(call.authentication.principal<HttpServer.SessionTicket>()!!.id) }
}
