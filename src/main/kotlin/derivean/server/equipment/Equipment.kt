package derivean.server.equipment

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import java.util.*

object EquipmentTable : UUIDTable("equipment") {
	val name = varchar("name", 64)
}

class Equipment(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Equipment>(EquipmentTable)

	var name by EquipmentTable.name
}
