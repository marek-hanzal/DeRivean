package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.RoleTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Role(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Role>(RoleTable)

	var name by RoleTable.name
}
