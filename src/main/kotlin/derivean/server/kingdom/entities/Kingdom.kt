package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import derivean.server.building.entities.Building
import derivean.server.building.entities.BuildingTable
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable
import derivean.server.user.entities.User
import org.jetbrains.exposed.dao.UUIDEntityClass

class Kingdom(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<Kingdom>(KingdomTable)

	val heroes by Hero referrersOn HeroTable.kingdom
	val buildings by Building referrersOn BuildingTable.kingdom
	var user by User referencedOn KingdomTable.user
	var name by KingdomTable.name
	override val attributes by KingdomAttribute referrersOn KingdomAttributeTable.kingdom
}
