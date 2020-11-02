package derivean.server.user.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttribute(id: EntityUUID) : AttributeEntity<User>(id) {
	companion object : UUIDEntityClass<UserAttribute>(UserAttributeTable)

	override var parent by User referencedOn UserAttributeTable.user
	override var name by UserAttributeTable.name
	override var value by UserAttributeTable.value
}
