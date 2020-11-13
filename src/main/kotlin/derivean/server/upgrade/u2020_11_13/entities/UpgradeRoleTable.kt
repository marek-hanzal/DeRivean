package derivean.server.upgrade.u2020_11_13.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeRoleTable : UUIDTable("role") {
	val name = varchar("name", 32).uniqueIndex()
}
