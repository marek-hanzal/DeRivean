package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeBuildingAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeBuildingAttribute>(UpgradeBuildingAttributeTable)

	var building by UpgradeBuilding referencedOn UpgradeBuildingAttributeTable.building
	var name by UpgradeBuildingAttributeTable.name
	var value by UpgradeBuildingAttributeTable.value
}
