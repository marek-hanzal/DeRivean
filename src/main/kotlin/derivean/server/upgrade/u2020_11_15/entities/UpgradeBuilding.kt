package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeBuilding(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeBuilding>(UpgradeBuildingTable)

	var kingdom by UpgradeKingdom referencedOn UpgradeBuildingTable.kingdom
	var user by UpgradeUser referencedOn UpgradeBuildingTable.user
	var name by UpgradeBuildingTable.name
	var built by UpgradeBuildingTable.built
	var claim by UpgradeBuildingTable.claim
	var attributes by UpgradeAttribute via UpgradeBuildingAttributeTable
}
