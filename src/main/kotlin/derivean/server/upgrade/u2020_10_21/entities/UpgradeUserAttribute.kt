package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeUserAttribute(id: EntityUUID) : AttributeEntity<UpgradeUser>(id) {
	companion object : UUIDEntityClass<UpgradeUserAttribute>(UpgradeUserAttributeTable)

	override var parent by UpgradeUser referencedOn UpgradeUserAttributeTable.user
	override var name by UpgradeUserAttributeTable.name
	override var value by UpgradeUserAttributeTable.value
}
