package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.HeroAttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class HeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<HeroAttribute>(HeroAttributeTable)

	var hero by HeroEntity referencedOn HeroAttributeTable.hero
	var attribute by AttributeEntity referencedOn HeroAttributeTable.attribute
}
