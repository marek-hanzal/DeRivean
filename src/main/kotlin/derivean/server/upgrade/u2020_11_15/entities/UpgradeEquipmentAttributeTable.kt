package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeEquipmentAttributeTable : UUIDTable("equipment-attribute") {
	val equipment = reference("equipment", UpgradeEquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", UpgradeAttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
