package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.EntityAttributeTable
import derivean.storage.tables.EntityTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityAttributeEntity>(EntityAttributeTable)

	var entity by EntityEntity referencedOn EntityTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
