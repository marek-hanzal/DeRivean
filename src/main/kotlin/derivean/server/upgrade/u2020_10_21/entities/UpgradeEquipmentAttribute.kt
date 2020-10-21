package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEquipmentAttribute>(UpgradeEquipmentAttributeTable)

	var equipment by UpgradeEquipmentAttribute referencedOn UpgradeEquipmentAttributeTable.equipment
	var name by UpgradeEquipmentAttributeTable.name
	var value by UpgradeEquipmentAttributeTable.value
}
