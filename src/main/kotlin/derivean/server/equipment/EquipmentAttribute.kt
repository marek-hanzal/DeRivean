package derivean.server.equipment

import derivean.server.entity.EntityAttributeTable
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import java.util.*

object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}

class EquipmentAttribute(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EquipmentAttribute>(EquipmentAttributeTable)

	var equipment by EquipmentAttribute referencedOn EquipmentAttributeTable.equipment
	var name by EntityAttributeTable.name
	var value by EntityAttributeTable.value
}
