package derivean.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object AttributeTypeTable : UUIDTable("attribute-type") {
	val group = reference("group", AttributeGroupTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val description = varchar("description", 192).nullable()

	init {
		uniqueIndex("type_unique", group, name)
	}
}
