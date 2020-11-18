package derivean.server.user

import derivean.storage.repository.UserRepository
import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage
import leight.user.ISessionValidator
import leight.user.SessionTicket

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
