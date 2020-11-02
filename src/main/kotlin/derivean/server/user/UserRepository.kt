package derivean.server.user

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.user.entities.User
import derivean.server.user.entities.UserTable

class UserRepository(container: IContainer) : AbstractAttributeRepository<User, UserTable>(User, UserTable, container) {
	override val attributeRepository by container.lazy<UserAttributeRepository>()

	fun findByLogin(login: String) = entity.find { table.login eq login }.first()
}
