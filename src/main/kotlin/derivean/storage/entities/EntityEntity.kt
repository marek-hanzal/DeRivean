package derivean.storage.entities

import derivean.storage.tables.EntityAttributeTable
import derivean.storage.tables.EntityTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityEntity>(EntityTable)

	var ancestor by EntityEntity optionalReferencedOn EntityTable.ancestor
	var name by EntityTable.name
	val attributes by AttributeEntity via EntityAttributeTable
}
