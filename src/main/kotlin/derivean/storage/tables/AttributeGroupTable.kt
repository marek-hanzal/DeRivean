package derivean.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object AttributeGroupTable : UUIDTable("attribute-group") {
	val name = varchar("name", 64).uniqueIndex()
	val description = varchar("description", 64).nullable()
}
