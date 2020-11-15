package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdom(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeKingdom>(UpgradeKingdomTable)

	val heroes by UpgradeHero referrersOn UpgradeHeroTable.kingdom
	val buildings by UpgradeBuilding referrersOn UpgradeBuildingTable.kingdom
	var user by UpgradeUser referencedOn UpgradeKingdomTable.user
	var name by UpgradeKingdomTable.name
	var attributes by UpgradeAttribute via UpgradeKingdomAttributeTable
}
