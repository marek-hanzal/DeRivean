package derivean.server.player

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable

object PlayerTable : UUIDTable("player") {
	val name = varchar("name", 128).uniqueIndex()
}

class Player(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Player>(PlayerTable)

	var name by PlayerTable.name
}
