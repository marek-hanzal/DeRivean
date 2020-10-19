package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17
import java.util.*

typealias UserTable = u2020_10_17.uUserTable
typealias User = u2020_10_17.uUser

class UserRepository(container: IContainer) : AbstractRepository<User, UserTable>(User, UserTable, container) {
	fun findByUser(user: String) = entity.find { table.user eq user }.first()

	fun token(user: User) {
		user.token = UUID.randomUUID().toString()
	}

	fun dropToken(user: User) {
		user.token = null
	}
}
