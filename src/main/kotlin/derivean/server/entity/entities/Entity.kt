package derivean.server.entity.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Entity(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<Entity>(EntityTable)

	var ancestor by Entity optionalReferencedOn EntityTable.ancestor
	var name by EntityTable.name
	override val attributes by EntityAttribute referrersOn EntityAttributeTable.entity
}
