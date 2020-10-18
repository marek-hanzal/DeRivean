package derivean.server.equipment

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable

object EquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}

class Equipment(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Equipment>(EquipmentTable)

	var name by EquipmentTable.name
}
