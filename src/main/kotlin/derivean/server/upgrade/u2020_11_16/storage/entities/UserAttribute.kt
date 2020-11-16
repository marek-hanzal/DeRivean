package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.UserTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UserAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserAttribute>(UserAttributeTable)

	var user by User referencedOn UserTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
