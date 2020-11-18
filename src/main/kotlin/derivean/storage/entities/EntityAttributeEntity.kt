package derivean.storage.entities

import derivean.storage.tables.EntityAttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityAttributeEntity>(EntityAttributeTable)

	var entity by EntityEntity referencedOn EntityAttributeTable.entity
	var attribute by AttributeEntity referencedOn EntityAttributeTable.attribute
}
