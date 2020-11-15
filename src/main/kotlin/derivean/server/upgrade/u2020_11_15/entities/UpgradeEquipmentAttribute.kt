package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEquipmentAttribute>(UpgradeEquipmentAttributeTable)

	var equipment by UpgradeEquipment referencedOn UpgradeEquipmentTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
