package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeBuilding(id: EntityUUID) : EntityWithAttributes<UpgradeBuildingAttribute>(id) {
	companion object : UUIDEntityClass<UpgradeBuilding>(UpgradeBuildingTable)

	var kingdom by UpgradeKingdom referencedOn UpgradeBuildingTable.kingdom
	override val attributes by UpgradeBuildingAttribute referrersOn UpgradeBuildingAttributeTable.building
	var name by UpgradeBuildingTable.name
}
