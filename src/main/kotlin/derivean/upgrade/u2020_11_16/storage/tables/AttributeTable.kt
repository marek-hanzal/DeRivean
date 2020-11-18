package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object AttributeTable : UUIDTable("attribute") {
	val type = reference("type", AttributeTypeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val value = double("value")
}
