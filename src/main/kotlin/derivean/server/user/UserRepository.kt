package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.repository.UnknownEntityException
import java.util.*

class UserRepository(container: IContainer) : AbstractRepository<User>(User, container) {
	fun findByUser(user: String) = User.find { UserTable.user eq user }.first()

	override fun find(uuid: UUID) = User.findById(uuid) ?: throw UnknownEntityException("Requested an unknown Player [${uuid}].")
}
