package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.EntityAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.EntityTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Entity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Entity>(EntityTable)

	var ancestor by Entity optionalReferencedOn EntityTable.ancestor
	var name by EntityTable.name
	val attributes by Attribute via EntityAttributeTable
}
