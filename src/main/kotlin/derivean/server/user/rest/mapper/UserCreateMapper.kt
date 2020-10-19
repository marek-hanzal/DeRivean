package derivean.server.user.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.server.user.User
import derivean.server.user.UserRepository

class UserCreateMapper(container: IContainer) : AbstractActionMapper<UserCreateMapper.UserCreate, User>(container) {
	private val userRepository: UserRepository by container.lazy()

	override fun resolve(item: UserCreate) = storage.write {
		userRepository.create {
			this.name = item.name
			this.user = item.user
			this.password = item.password
			this.token = item.token
		}
	}

	data class UserCreate(
		val user: String,
		val name: String,
		val password: String?,
		val token: String?,
	)
}
