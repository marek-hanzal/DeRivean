package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.EquipmentAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.EquipmentTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttributeEntity>(EquipmentAttributeTable)

	var equipment by EquipmentEntity referencedOn EquipmentTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
