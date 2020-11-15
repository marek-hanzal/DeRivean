package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.EntityAttributeTable
import derivean.storage.tables.EntityTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityAttribute>(EntityAttributeTable)

	var entity by Entity referencedOn EntityTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
