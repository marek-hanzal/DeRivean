package derivean.server.equipment

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
