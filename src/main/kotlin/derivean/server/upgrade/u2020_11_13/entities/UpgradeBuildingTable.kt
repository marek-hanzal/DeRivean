package derivean.server.upgrade.u2020_11_13.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.jodatime.datetime

object UpgradeBuildingTable : UUIDTable("building") {
	val kingdom = reference("kingdom", UpgradeKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val built = datetime("built").nullable()
	val claim = datetime("claim").nullable()
}