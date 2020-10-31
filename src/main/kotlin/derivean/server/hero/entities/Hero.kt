package derivean.server.hero.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import derivean.server.kingdom.entities.Kingdom
import derivean.server.user.entities.User
import org.jetbrains.exposed.dao.UUIDEntityClass

class Hero(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<Hero>(HeroTable)

	var user by User referencedOn HeroTable.user
	var kingdom by Kingdom referencedOn HeroTable.kingdom
	var name by HeroTable.name
	override val attributes by HeroAttribute referrersOn HeroAttributeTable.hero
}
