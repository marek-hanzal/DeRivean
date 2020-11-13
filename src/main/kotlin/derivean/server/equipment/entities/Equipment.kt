package derivean.server.equipment.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Equipment(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Equipment>(EquipmentTable)

	var name by EquipmentTable.name
	val attributes by Attribute via EquipmentAttributeTable
}
