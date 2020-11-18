package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object BuildingAttributeTable : UUIDTable("building-attribute") {
	val building = reference("building", BuildingTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
