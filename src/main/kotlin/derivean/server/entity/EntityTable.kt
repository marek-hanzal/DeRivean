package derivean.server.entity

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EntityTable : UUIDTable("entity") {
	val ancestor = reference("ancestor", EntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
	val name = varchar("name", 64)
}
