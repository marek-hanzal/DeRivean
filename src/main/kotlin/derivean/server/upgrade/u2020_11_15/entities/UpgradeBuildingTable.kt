package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.jodatime.datetime

object UpgradeBuildingTableOpen : UUIDTable("building") {
	val user = reference("user", UpgradeUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE).nullable()
	val kingdom = reference("kingdom", UpgradeKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val description = varchar("description", 128).nullable()
	val built = datetime("built").nullable()
	val claim = datetime("claim").nullable()
}

object UpgradeBuildingTable : UUIDTable("building") {
	val user = reference("user", UpgradeUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val kingdom = reference("kingdom", UpgradeKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val description = varchar("description", 128).nullable()
	val built = datetime("built").nullable()
	val claim = datetime("claim").nullable()
}
