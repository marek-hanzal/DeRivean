package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEquipment(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEquipment>(UpgradeEquipmentTable)

	var name by UpgradeEquipmentTable.name
}
