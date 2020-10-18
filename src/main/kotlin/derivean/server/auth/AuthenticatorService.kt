package derivean.server.auth

import at.favre.lib.crypto.bcrypt.BCrypt
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.server.user.UserException
import derivean.server.user.UserRepository

class AuthenticatorService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun password(password: String): String = BCrypt.withDefaults().hashToString(12, password.toCharArray())

	fun authenticate(user: String, password: String) = userRepository.findByUser(user).also {
		if (it.password == null) {
			throw UserException("Inactive user")
		}
		if (!BCrypt.verifyer().verify(password.toCharArray(), it.password).verified) {
			throw UserException("Invalid password")
		}
		userRepository.token(it)
	}
}
