package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeHeroAttribute(id: EntityUUID) : AttributeEntity<UpgradeHero>(id) {
	companion object : UUIDEntityClass<UpgradeHeroAttribute>(UpgradeHeroAttributeTable)

	override var parent by UpgradeHero referencedOn UpgradeHeroAttributeTable.hero
	override var name by UpgradeHeroAttributeTable.name
	override var value by UpgradeHeroAttributeTable.value
}
