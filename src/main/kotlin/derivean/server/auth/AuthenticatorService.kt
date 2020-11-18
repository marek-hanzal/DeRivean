package derivean.server.auth

import at.favre.lib.crypto.bcrypt.BCrypt
import derivean.storage.repository.UserRepository
import leight.container.AbstractService
import leight.container.IContainer
import leight.user.UnknownUserException
import leight.user.UserException
import java.util.*

class AuthenticatorService(container: IContainer) : AbstractService(container) {
	private val userRepository: UserRepository by container.lazy()

	fun encrypt(password: String): String = BCrypt.withDefaults().hashToString(12, password.toCharArray())

	fun verify(password: String, hash: String) = BCrypt.verifyer().verify(password.toCharArray(), hash).verified

	fun authenticate(login: String, password: String) = try {
		userRepository.findByLogin(login).also {
			if (it.password == null) {
				throw UserException("Inactive user")
			}
			if (!verify(password, it.password!!)) {
				throw UserException("Invalid password")
			}
		}
	} catch (e: NoSuchElementException) {
		throw UnknownUserException("Requested unknown login [$login].", e)
	}
}
