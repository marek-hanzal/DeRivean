package derivean.server.upgrade.u2020_11_08.entities

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table

object UpgradeUserRoleTable : Table("user-role") {
	val user = reference("user", UpgradeUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val role = reference("role", UpgradeRoleTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	override val primaryKey = PrimaryKey(user, role)
}
