package derivean.storage.tables

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table

object UserRoleTable : Table("user-role") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val role = reference("role", RoleTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	override val primaryKey = PrimaryKey(user, role)
}
