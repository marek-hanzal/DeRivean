package derivean.server.entity

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import java.util.*

object EntityTable : UUIDTable("entity") {
	val name = varchar("name", 64)
}

class Entity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Entity>(EntityTable)

	var name by EntityTable.name
}
