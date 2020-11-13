package derivean.server.upgrade.u2020_11_13.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeKingdomAttributeTable : UUIDTable("kingdom-attribute") {
	val kingdom = reference("kingdom", UpgradeKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", UpgradeAttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
