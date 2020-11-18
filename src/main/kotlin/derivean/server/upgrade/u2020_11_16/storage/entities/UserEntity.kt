package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserRoleTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserEntity>(UserTable)

	var attributes by AttributeEntity via UserAttributeTable
	val kingdoms by KingdomEntity referrersOn KingdomTable.user
	var roles by RoleEntity via UserRoleTable

	var name by UserTable.name
	var login by UserTable.login
	var password by UserTable.password
	var site by UserTable.site
	var ticket by UserTable.ticket
}
