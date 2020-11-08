package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeBuildingAttribute(id: EntityUUID) : AttributeEntity<UpgradeBuilding>(id) {
	companion object : UUIDEntityClass<UpgradeBuildingAttribute>(UpgradeBuildingAttributeTable)

	override var parent by UpgradeBuilding referencedOn UpgradeBuildingAttributeTable.building
	override var name by UpgradeBuildingAttributeTable.name
	override var value by UpgradeBuildingAttributeTable.value
}
