package derivean.server.entity

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Entity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Entity>(EntityTable)

	var ancestor by Entity optionalReferencedOn EntityTable.ancestor
	var name by EntityTable.name
	val attributes by EntityAttribute referrersOn EntityAttributeTable.entity
}
