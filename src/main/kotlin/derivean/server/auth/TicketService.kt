package derivean.server.auth

import derivean.storage.entities.UserEntity
import derivean.storage.repository.UserRepository
import leight.container.AbstractService
import leight.container.IContainer
import java.util.*

class TicketService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun ticketFor(userEntity: UserEntity): UUID = UUID.randomUUID().also { userEntity.ticket = it }

	fun drop(userEntity: UserEntity) {
		userEntity.ticket = null
	}

	fun drop(ticket: UUID) = drop(userRepository.findByTicket(ticket))
}
