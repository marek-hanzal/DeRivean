package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19_03

typealias UserTable = u2020_10_19_03.uUserTable
typealias User = u2020_10_19_03.uUser

class UserRepository(container: IContainer) : AbstractRepository<User, UserTable>(User, UserTable, container) {
	fun findByLogin(login: String) = entity.find { table.login eq login }.first()
}
