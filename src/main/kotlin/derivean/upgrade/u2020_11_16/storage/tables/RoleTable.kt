package derivean.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object RoleTable : UUIDTable("role") {
	val name = varchar("name", 32).uniqueIndex()
}
