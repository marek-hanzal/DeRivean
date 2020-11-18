package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
