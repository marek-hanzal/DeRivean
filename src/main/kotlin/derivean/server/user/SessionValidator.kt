package derivean.server.user

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import derivean.lib.user.ISessionValidator
import derivean.lib.user.SessionTicket
import derivean.storage.repository.UserRepository

class SessionValidator(container: IContainer) : AbstractService(container), ISessionValidator {
	private val userRepository: UserRepository by container.lazy()
	private val storage: IStorage by container.lazy()

	override fun validate(sessionTicket: SessionTicket) = try {
		storage.read { userRepository.findByTicket(sessionTicket.id) }.let {
			/**
			 * If the user has site (thus has an access) - return it's ticket; if not, return null (access forbidden).
			 */
			it.site?.let { sessionTicket }
		}
	} catch (e: NoSuchElementException) {
		logger.error(e.message, e)
		null
	}
}
