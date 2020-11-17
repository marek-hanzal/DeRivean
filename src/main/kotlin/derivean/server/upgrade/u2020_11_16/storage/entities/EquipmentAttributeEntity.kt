package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.EquipmentAttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttributeEntity>(EquipmentAttributeTable)

	var equipment by EquipmentEntity referencedOn EquipmentAttributeTable.equipment
	var attribute by AttributeEntity referencedOn EquipmentAttributeTable.attribute
}