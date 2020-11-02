package derivean.server.user.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UserAttributeTable : UUIDTable("user-attribute") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
