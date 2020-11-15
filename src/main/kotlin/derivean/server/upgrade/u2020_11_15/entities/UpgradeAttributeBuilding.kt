package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

/**
 * Relation from attribute to building (so which attributes are available to all buildings - for administration).
 */
class UpgradeAttributeBuilding(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeAttributeBuilding>(UpgradeAttributeBuildingTable)

	var building by UpgradeBuilding referencedOn UpgradeBuildingTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
