package derivean.server.user.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Role(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Role>(RoleTable)

	var name by RoleTable.name
}
