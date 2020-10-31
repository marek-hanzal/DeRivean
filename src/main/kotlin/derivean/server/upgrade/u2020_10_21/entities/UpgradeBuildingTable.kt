package derivean.server.upgrade.u2020_10_21.entities

import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeBuildingTable : UUIDTable("building") {
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
}
