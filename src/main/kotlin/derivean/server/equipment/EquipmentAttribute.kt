package derivean.server.equipment

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttribute>(EquipmentAttributeTable)

	var equipment by EquipmentAttribute referencedOn EquipmentAttributeTable.equipment
	var name by EquipmentAttributeTable.name
	var value by EquipmentAttributeTable.value
}
