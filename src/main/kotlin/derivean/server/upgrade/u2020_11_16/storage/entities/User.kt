package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserRoleTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable
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
