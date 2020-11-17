package derivean.server.auth

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.storage.entities.UserEntity
import derivean.storage.repository.UserRepository
import java.util.*

class TicketService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun ticketFor(userEntity: UserEntity): UUID = UUID.randomUUID().also { userEntity.ticket = it }

	fun drop(userEntity: UserEntity) {
		userEntity.ticket = null
	}

	fun drop(ticket: UUID) = drop(userRepository.findByTicket(ticket))
}
