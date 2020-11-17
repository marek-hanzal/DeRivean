package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.EquipmentAttributeTable
import derivean.storage.tables.EquipmentTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentEntity>(EquipmentTable)

	var name by EquipmentTable.name
	val attributes by AttributeEntity via EquipmentAttributeTable
}
