package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.EntityAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.EntityTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityEntity>(EntityTable)

	var ancestor by EntityEntity optionalReferencedOn EntityTable.ancestor
	var name by EntityTable.name
	val attributes by AttributeEntity via EntityAttributeTable
}
