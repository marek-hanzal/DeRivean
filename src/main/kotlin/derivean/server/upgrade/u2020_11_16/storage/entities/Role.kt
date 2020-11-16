package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.RoleTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Role(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Role>(RoleTable)

	var name by RoleTable.name
}
