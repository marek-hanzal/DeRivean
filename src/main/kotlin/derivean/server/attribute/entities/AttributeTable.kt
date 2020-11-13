package derivean.server.attribute.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object AttributeTable : UUIDTable("attribute") {
	val name = varchar("name", 128)
	val value = double("value")
}
