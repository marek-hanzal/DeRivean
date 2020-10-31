package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.entities.Kingdom
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeBuilding(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeBuilding>(UpgradeBuildingTable)

	var kingdom by Kingdom referencedOn UpgradeBuildingTable.kingdom
	val attributes by UpgradeBuildingAttribute referrersOn UpgradeBuildingAttributeTable.building
	var name by UpgradeBuildingTable.name
}
