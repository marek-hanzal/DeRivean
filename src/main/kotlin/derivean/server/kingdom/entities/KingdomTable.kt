package derivean.server.kingdom.entities

import derivean.server.user.entities.UserTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object KingdomTable : UUIDTable("kingdom") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 128).uniqueIndex()
}
