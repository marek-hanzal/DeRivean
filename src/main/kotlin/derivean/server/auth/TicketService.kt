package derivean.server.auth

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.storage.entities.User
import derivean.storage.repository.UserRepository
import java.util.*

class TicketService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun ticketFor(user: User): UUID = UUID.randomUUID().also { user.ticket = it }

	fun drop(user: User) {
		user.ticket = null
	}

	fun drop(ticket: UUID) = drop(userRepository.findByTicket(ticket))
}
