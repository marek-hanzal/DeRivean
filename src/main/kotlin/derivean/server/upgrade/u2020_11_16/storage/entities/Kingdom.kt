package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
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
