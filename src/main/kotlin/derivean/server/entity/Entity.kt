package derivean.server.entity

import derivean.server.player.Player
import derivean.server.player.PlayerTable
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import java.util.*

object EntityTable : UUIDTable("entity") {
	val player = reference("player", PlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val ancestor = reference("ancestor", EntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
}

class Entity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Entity>(EntityTable)

	var player by Player referencedOn EntityTable.player
	var name by EntityTable.name
	var ancestor by Entity optionalReferencedOn EntityTable.ancestor
}
