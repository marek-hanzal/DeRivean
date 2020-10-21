package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeKingdomAttribute>(UpgradeKingdomAttributeTable)

	var kingdom by UpgradeKingdom referencedOn UpgradeKingdomAttributeTable.kingdom
	var name by UpgradeKingdomAttributeTable.name
	var value by UpgradeKingdomAttributeTable.value
}
