package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable
import derivean.server.user.entities.User
import derivean.storage.entities.Attribute
import derivean.storage.entities.Building
import derivean.storage.tables.BuildingTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Kingdom(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Kingdom>(KingdomTable)

	val heroes by Hero referrersOn HeroTable.kingdom
	val buildings by Building referrersOn BuildingTable.kingdom
	var user by User referencedOn KingdomTable.user
	var name by KingdomTable.name
	var attributes by Attribute via KingdomAttributeTable
}
