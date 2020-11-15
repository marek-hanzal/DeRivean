package derivean.server.hero.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class HeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<HeroAttribute>(HeroAttributeTable)

	var hero by Hero referencedOn HeroTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
