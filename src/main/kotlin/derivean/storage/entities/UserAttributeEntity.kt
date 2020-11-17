package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.UserAttributeTable
import derivean.storage.tables.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttributeEntity>(UserAttributeTable)

	var user by UserEntity referencedOn UserTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
