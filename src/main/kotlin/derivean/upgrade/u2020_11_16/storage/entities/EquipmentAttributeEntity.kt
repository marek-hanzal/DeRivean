package derivean.upgrade.u2020_11_16.storage.entities

import derivean.upgrade.u2020_11_16.storage.tables.EquipmentAttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttributeEntity>(EquipmentAttributeTable)

	var equipment by EquipmentEntity referencedOn EquipmentAttributeTable.equipment
	var attribute by AttributeEntity referencedOn EquipmentAttributeTable.attribute
}
