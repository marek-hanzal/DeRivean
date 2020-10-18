package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17.uUser
import java.util.*

class UserRepository(container: IContainer) : AbstractRepository<uUser, UserTable>(uUser, UserTable, container) {
	fun findByUser(user: String) = entity.find { table.user eq user }.first()

	fun token(user: User) {
		user.token = UUID.randomUUID().toString()
	}

	fun dropToken(user: User) {
		user.token = null
	}
}
