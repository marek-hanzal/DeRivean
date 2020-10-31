package derivean.server.hero.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class HeroAttribute(id: EntityUUID) : AttributeEntity<Hero>(id) {
	companion object : UUIDEntityClass<HeroAttribute>(HeroAttributeTable)

	override var parent by Hero referencedOn HeroAttributeTable.hero
	override var name by HeroAttributeTable.name
	override var value by HeroAttributeTable.value
}
