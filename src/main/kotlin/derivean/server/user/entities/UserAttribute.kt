package derivean.server.user.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.entities.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttribute>(UserAttributeTable)

	var user by User referencedOn UserTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
