package derivean.server.entity.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EntityAttribute>(EntityAttributeTable)

	var entity by Entity referencedOn EntityAttributeTable.entity
	var name by EntityAttributeTable.name
	var value by EntityAttributeTable.value
}
