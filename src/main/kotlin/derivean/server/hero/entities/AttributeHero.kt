package derivean.server.hero.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.entities.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeHero(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeHero>(AttributeHeroTable)

	var hero by Hero referencedOn HeroTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
