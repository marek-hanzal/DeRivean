package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.KingdomTable
import derivean.storage.tables.UserAttributeTable
import derivean.storage.tables.UserRoleTable
import derivean.storage.tables.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class User(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<User>(UserTable)

	var attributes by Attribute via UserAttributeTable
	val kingdoms by Kingdom referrersOn KingdomTable.user
	var roles by Role via UserRoleTable

	var name by UserTable.name
	var login by UserTable.login
	var password by UserTable.password
	var site by UserTable.site
	var ticket by UserTable.ticket
}
