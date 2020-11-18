package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomEntity>(KingdomTable)

	val heroes by HeroEntity referrersOn HeroTable.kingdom
	val buildings by BuildingEntity referrersOn BuildingTable.kingdom
	var user by UserEntity referencedOn KingdomTable.user
	var name by KingdomTable.name
	var attributes by AttributeEntity via KingdomAttributeTable
}
