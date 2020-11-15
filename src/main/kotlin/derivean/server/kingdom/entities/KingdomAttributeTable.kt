package derivean.server.kingdom.entities

import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object KingdomAttributeTable : UUIDTable("kingdom-attribute") {
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
