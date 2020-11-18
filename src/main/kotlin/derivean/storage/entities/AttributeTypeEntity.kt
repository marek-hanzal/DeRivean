package derivean.storage.entities

import derivean.storage.tables.AttributeTypeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeTypeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeTypeEntity>(AttributeTypeTable)

	var group by AttributeGroupEntity referencedOn AttributeTypeTable.group
	var name by AttributeTypeTable.name
	var description by AttributeTypeTable.description
}
