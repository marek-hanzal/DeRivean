package derivean.server.entity.entities

import derivean.storage.tables.AttributeTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EntityAttributeTable : UUIDTable("entity-attribute") {
	val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
