package derivean.server.user

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class User(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<User>(UserTable)

	var name by UserTable.name
	var login by UserTable.login
	var password by UserTable.password
	var token by UserTable.token
	var site by UserTable.site
}

