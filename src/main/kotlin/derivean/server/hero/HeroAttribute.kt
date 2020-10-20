package derivean.server.hero

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass


class HeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<HeroAttribute>(HeroAttributeTable)

	var hero by Hero referencedOn HeroAttributeTable.hero
	var name by HeroAttributeTable.name
	var value by HeroAttributeTable.value
}
