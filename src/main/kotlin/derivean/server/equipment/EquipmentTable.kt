package derivean.server.equipment

import org.jetbrains.exposed.dao.id.UUIDTable

object EquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}
