package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeEquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}
