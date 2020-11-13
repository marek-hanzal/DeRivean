package derivean.server.upgrade.u2020_11_13.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEntityAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEntityAttribute>(UpgradeEntityAttributeTable)

	var entity by UpgradeEntity referencedOn UpgradeEntityTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
