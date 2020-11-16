package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.BuildingTable
import derivean.storage.tables.HeroTable
import derivean.storage.tables.KingdomAttributeTable
import derivean.storage.tables.KingdomTable
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
