package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository

class UserRepository(container: IContainer) : AbstractRepository<User, UserTable>(User, UserTable, container) {
	fun findByLogin(login: String) = entity.find { table.login eq login }.first()
}
