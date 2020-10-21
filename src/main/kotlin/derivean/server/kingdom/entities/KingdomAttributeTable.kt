package derivean.server.kingdom.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object KingdomAttributeTable : UUIDTable("kingdom-attribute") {
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
