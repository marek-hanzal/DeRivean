package derivean.server.entity.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class EntityAttribute(id: EntityUUID) : AttributeEntity<Entity>(id) {
	companion object : UUIDEntityClass<EntityAttribute>(EntityAttributeTable)

	override var parent by Entity referencedOn EntityAttributeTable.entity
	override var name by EntityAttributeTable.name
	override var value by EntityAttributeTable.value
}
