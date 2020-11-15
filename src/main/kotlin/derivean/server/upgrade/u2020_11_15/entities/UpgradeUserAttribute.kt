package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeUserAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeUserAttribute>(UpgradeUserAttributeTable)

	var user by UpgradeUser referencedOn UpgradeUserTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
