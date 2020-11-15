package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Attribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Attribute>(AttributeTable)

	var type by AttributeType referencedOn AttributeTable.type
	var value by AttributeTable.value
}
