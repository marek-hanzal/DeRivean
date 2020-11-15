package derivean.server.building.entities

import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object BuildingAttributeTable : UUIDTable("building-attribute") {
	val building = reference("building", BuildingTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
