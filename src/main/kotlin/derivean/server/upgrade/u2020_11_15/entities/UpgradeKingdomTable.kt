package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeKingdomTable : UUIDTable("kingdom") {
	val user = reference("user", UpgradeUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 128).uniqueIndex()
}
