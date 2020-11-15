package derivean.server.auth

import derivean.lib.auth.IRoleService
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import derivean.storage.repository.UserRepository
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
