package derivean.server.attribute.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Attribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Attribute>(AttributeTable)

	var name by AttributeTable.name
	var value by AttributeTable.value
}
