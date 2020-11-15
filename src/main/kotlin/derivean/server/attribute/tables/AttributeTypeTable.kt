package derivean.server.attribute.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object AttributeTypeTable : UUIDTable("attribute-type") {
	val group = reference("group", AttributeGroupTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64).uniqueIndex()
	val description = varchar("description", 128).nullable()
}
