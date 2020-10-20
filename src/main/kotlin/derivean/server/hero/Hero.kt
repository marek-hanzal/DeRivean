package derivean.server.hero

import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.Kingdom
import derivean.server.user.User
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Hero(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Hero>(HeroTable)

	var user by User referencedOn HeroTable.user
	var kingdom by Kingdom referencedOn HeroTable.kingdom
	var name by HeroTable.name
}
