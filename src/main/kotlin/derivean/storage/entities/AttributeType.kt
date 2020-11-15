package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTypeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeType(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeType>(AttributeTypeTable)

	var group by AttributeGroup referencedOn AttributeTypeTable.group
	var name by AttributeTypeTable.name
	var description by AttributeTypeTable.description
}