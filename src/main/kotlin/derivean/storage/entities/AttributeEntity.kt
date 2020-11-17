package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeEntity>(AttributeTable)

	var type by AttributeTypeEntity referencedOn AttributeTable.type
	var value by AttributeTable.value
}
