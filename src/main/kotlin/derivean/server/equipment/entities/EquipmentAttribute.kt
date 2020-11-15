package derivean.server.equipment.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttribute>(EquipmentAttributeTable)

	var equipment by Equipment referencedOn EquipmentTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
