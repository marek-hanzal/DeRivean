package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.user.DuplicateUserException
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UserCreateMapper(container: IContainer) : AbstractActionMapper<UserCreateMapper.UserCreate, UserFetchMapper.Fetch>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()
	private val userFetchMapper: UserFetchMapper by container.lazy()

	override fun resolve(item: UserCreate) = try {
		userFetchMapper.map(storage.write {
			userRepository.create {
				this.name = item.name
				this.login = item.login
				this.password = item.password?.let { authenticatorService.encrypt(it) }
				this.token = item.token
			}
		})
	} catch (e: ExposedSQLException) {
		if (e.message?.contains("user_login_unique") == true) {
			throw DuplicateUserException("User with the given login already exists", e)
		} else if (e.message?.contains("user_name_unique") == true) {
			throw DuplicateUserException("User with the given name already exists", e)
		}
		throw e
	}

	data class UserCreate(
		val login: String,
		val name: String,
		val password: String?,
		val token: String?,
	)
}
