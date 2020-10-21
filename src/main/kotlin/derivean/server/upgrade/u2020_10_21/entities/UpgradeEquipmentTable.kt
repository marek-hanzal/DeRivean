package derivean.server.upgrade.u2020_10_21.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeEquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}
