package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeAttributeGroup(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeAttributeGroup>(UpgradeAttributeGroupTable)

	var name by UpgradeAttributeGroupTable.name
	var description by UpgradeAttributeGroupTable.description
}
