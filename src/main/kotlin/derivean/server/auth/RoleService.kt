package derivean.server.auth

import derivean.storage.repository.UserRepository
import leight.auth.IRoleService
import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage
import java.util.*

class RoleService(container: IContainer) : AbstractService(container), IRoleService {
	private val userRepository: UserRepository by container.lazy()
	private val storage: IStorage by container.lazy()

	override fun rolesFor(ticket: UUID) = storage.read {
		try {
			userRepository.findByTicket(ticket).roles.map { it.name }.toSet()
		} catch (e: NoSuchElementException) {
			logger.error("Cannot find user by ticket [$ticket].", e)
			setOf()
		} catch (e: Throwable) {
			logger.error(e.message, e)
			setOf()
		}
	}
}
