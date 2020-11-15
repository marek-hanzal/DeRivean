package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.HeroAttributeTable
import derivean.storage.tables.HeroTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Hero(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Hero>(HeroTable)

	var user by User referencedOn HeroTable.user
	var kingdom by Kingdom referencedOn HeroTable.kingdom
	var name by HeroTable.name
	var attributes by Attribute via HeroAttributeTable
}
