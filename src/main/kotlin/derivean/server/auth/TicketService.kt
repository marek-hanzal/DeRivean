package derivean.server.auth

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.server.user.entities.User
import java.util.*

class TicketService(container: IContainer) : AbstractService(container) {
	fun ticketFor(user: User): UUID = UUID.randomUUID().also { user.ticket = it }

	fun drop(user: User) {
		user.ticket = null
	}
}
