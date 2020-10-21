package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEntityAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEntityAttribute>(UpgradeEntityAttributeTable)

	var entity by UpgradeEntity referencedOn UpgradeEntityAttributeTable.entity
	var name by UpgradeEntityAttributeTable.name
	var value by UpgradeEntityAttributeTable.value
}
