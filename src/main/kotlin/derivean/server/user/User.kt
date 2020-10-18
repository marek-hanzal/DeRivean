package derivean.server.user

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable

object UserTable : UUIDTable("user") {
	val name = varchar("name", 128).uniqueIndex()
	val user = varchar("user", 128).uniqueIndex()
	val password = varchar("password", 128).nullable()
	val token = varchar("token", 128).uniqueIndex().nullable()
}

class User(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<User>(UserTable)

	var name by UserTable.name
	var user by UserTable.user
	var password by UserTable.password
	var token by UserTable.token
}
