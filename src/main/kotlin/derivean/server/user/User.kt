package derivean.server.user

import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import java.util.*

object UserTable : UUIDTable("user") {
	val name = varchar("name", 128).uniqueIndex()
	val user = varchar("user", 128).uniqueIndex()
	val password = varchar("password", 128).nullable()
	val token = varchar("token", 128).uniqueIndex().nullable()
}

class User(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<User>(UserTable)

	var name by UserTable.name
	var user by UserTable.user
	var password by UserTable.password
	var token by UserTable.token
}
