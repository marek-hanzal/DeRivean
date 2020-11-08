package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdomAttribute(id: EntityUUID) : AttributeEntity<UpgradeKingdom>(id) {
	companion object : UUIDEntityClass<UpgradeKingdomAttribute>(UpgradeKingdomAttributeTable)

	override var parent by UpgradeKingdom referencedOn UpgradeKingdomAttributeTable.kingdom
	override var name by UpgradeKingdomAttributeTable.name
	override var value by UpgradeKingdomAttributeTable.value
}
