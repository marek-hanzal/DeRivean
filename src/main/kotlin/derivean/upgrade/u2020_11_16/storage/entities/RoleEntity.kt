package derivean.upgrade.u2020_11_16.storage.entities

import derivean.upgrade.u2020_11_16.storage.tables.RoleTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class RoleEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<RoleEntity>(RoleTable)

	var name by RoleTable.name
}
