package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19_03
import java.util.*

typealias UserTable = u2020_10_19_03.uUserTable
typealias User = u2020_10_19_03.uUser

class UserRepository(container: IContainer) : AbstractRepository<User, UserTable>(User, UserTable, container) {
	fun findByLogin(login: String) = entity.find { table.login eq login }.first()

	fun token(user: User) {
		user.token = UUID.randomUUID().toString()
	}

	fun dropToken(user: User) {
		user.token = null
	}
}
