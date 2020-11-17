package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.EntityAttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityAttributeEntity>(EntityAttributeTable)

	var entity by EntityEntity referencedOn EntityAttributeTable.entity
	var attribute by AttributeEntity referencedOn EntityAttributeTable.attribute
}