package derivean.storage.entities

import derivean.storage.tables.UserAttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttributeEntity>(UserAttributeTable)

	var user by UserEntity referencedOn UserAttributeTable.user
	var attribute by AttributeEntity referencedOn UserAttributeTable.attribute
}
