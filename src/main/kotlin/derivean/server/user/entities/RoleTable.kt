package derivean.server.user.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object RoleTable : UUIDTable("role") {
	val name = varchar("name", 32).uniqueIndex()
}
