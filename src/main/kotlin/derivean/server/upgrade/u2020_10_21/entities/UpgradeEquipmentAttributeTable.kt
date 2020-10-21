package derivean.server.upgrade.u2020_10_21.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeEquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", UpgradeEquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
