package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeHeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeHeroAttribute>(UpgradeHeroAttributeTable)

	var hero by UpgradeHero referencedOn UpgradeHeroAttributeTable.hero
	var name by UpgradeHeroAttributeTable.name
	var value by UpgradeHeroAttributeTable.value
}
