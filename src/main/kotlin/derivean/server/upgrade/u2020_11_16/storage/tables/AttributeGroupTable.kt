package derivean.server.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object AttributeGroupTable : UUIDTable("attribute-group") {
	val name = varchar("name", 64).uniqueIndex()
	val description = varchar("description", 192).nullable()
}
