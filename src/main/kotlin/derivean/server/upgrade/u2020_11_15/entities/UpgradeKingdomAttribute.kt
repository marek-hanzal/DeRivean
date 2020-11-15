package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeKingdomAttribute>(UpgradeKingdomAttributeTable)

	var kingdom by UpgradeKingdom referencedOn UpgradeKingdomTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
