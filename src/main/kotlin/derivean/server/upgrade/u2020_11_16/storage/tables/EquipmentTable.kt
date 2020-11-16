package derivean.server.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object EquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}
