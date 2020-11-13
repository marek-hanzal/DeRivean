package derivean.server.upgrade.u2020_11_13.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeAttribute>(UpgradeAttributeTable)

	var name by UpgradeAttributeTable.name
	var value by UpgradeAttributeTable.value
}
