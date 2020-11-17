package derivean.server.user

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.user.ISessionValidator
import derivean.lib.user.SessionTicket
import derivean.storage.repository.UserRepository

class SessionValidator(container: IContainer) : AbstractService(container), ISessionValidator {
	private val userRepository: UserRepository by container.lazy()

	override fun validate(sessionTicket: SessionTicket) = try {
		userRepository.findByTicket(sessionTicket.id)
		sessionTicket
	} catch (e: NoSuchElementException) {
		logger.error(e.message, e)
		null
	}
}
