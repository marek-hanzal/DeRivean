package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object EntityAttributeTable : UUIDTable("entity-attribute") {
	val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
