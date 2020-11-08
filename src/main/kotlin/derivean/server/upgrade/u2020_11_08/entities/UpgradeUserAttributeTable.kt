package derivean.server.upgrade.u2020_11_08.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeUserAttributeTable : UUIDTable("user-attribute") {
	val user = reference("user", UpgradeUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
