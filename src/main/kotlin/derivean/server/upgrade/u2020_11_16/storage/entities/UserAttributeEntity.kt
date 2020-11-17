package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttributeEntity>(UserAttributeTable)

	var user by UserEntity referencedOn UserTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
