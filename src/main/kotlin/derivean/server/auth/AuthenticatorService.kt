package derivean.server.auth

import at.favre.lib.crypto.bcrypt.BCrypt
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.user.UserException
import derivean.server.user.UserRepository

class AuthenticatorService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun encrypt(password: String): String = BCrypt.withDefaults().hashToString(12, password.toCharArray())

	fun verify(password: String, hash: String) = BCrypt.verifyer().verify(password.toCharArray(), hash).verified

	fun authenticate(user: String, password: String) = userRepository.findByLogin(user).also {
		if (it.password == null) {
			throw UserException("Inactive user")
		}
		if (!verify(password, it.password!!)) {
			throw UserException("Invalid password")
		}
		userRepository.token(it)
	}
}
