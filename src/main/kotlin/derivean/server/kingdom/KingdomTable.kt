package derivean.server.kingdom

import derivean.server.user.UserTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object KingdomTable : UUIDTable("kingdom") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 128).uniqueIndex()
}
