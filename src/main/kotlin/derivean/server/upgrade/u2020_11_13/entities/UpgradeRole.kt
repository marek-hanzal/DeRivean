package derivean.server.upgrade.u2020_11_13.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeRole(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeRole>(UpgradeRoleTable)

	var name by UpgradeRoleTable.name
}
