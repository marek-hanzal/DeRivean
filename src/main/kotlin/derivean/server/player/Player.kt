package derivean.server.player

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import java.util.*

object PlayerTable : UUIDTable("player") {
	val name = varchar("name", 128).uniqueIndex()
}

class Player(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Player>(PlayerTable)

	var name by PlayerTable.name
}
