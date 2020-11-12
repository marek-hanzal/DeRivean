package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdom(id: EntityUUID) : EntityWithAttributes<UpgradeKingdomAttribute>(id) {
	companion object : UUIDEntityClass<UpgradeKingdom>(UpgradeKingdomTable)

	val heroes by UpgradeHero referrersOn UpgradeHeroTable.kingdom
	val buildings by UpgradeBuilding referrersOn UpgradeBuildingTable.kingdom
	var user by UpgradeUser referencedOn UpgradeKingdomTable.user
	var name by UpgradeKingdomTable.name
	override val attributes by UpgradeKingdomAttribute referrersOn UpgradeKingdomAttributeTable.kingdom
}
