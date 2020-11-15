package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.UserAttributeTable
import derivean.storage.tables.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttribute>(UserAttributeTable)

	var user by User referencedOn UserTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
