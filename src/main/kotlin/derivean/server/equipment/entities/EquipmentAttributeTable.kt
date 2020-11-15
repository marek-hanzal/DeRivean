package derivean.server.equipment.entities

import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
