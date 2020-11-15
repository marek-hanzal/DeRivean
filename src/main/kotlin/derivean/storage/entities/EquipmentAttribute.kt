package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.EquipmentAttributeTable
import derivean.storage.tables.EquipmentTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttribute>(EquipmentAttributeTable)

	var equipment by Equipment referencedOn EquipmentTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
