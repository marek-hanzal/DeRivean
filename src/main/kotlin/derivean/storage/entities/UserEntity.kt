package derivean.storage.entities

import derivean.storage.tables.KingdomTable
import derivean.storage.tables.UserAttributeTable
import derivean.storage.tables.UserRoleTable
import derivean.storage.tables.UserTable
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
