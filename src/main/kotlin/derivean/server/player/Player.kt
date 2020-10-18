package derivean.server.player

import derivean.lib.storage.EntityUUID
import derivean.server.user.User
import derivean.server.user.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object PlayerTable : UUIDTable("player") {
	val name = varchar("name", 128).uniqueIndex()
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}

class Player(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Player>(PlayerTable)

	var name by PlayerTable.name
	var user by User referencedOn PlayerTable.user
}
