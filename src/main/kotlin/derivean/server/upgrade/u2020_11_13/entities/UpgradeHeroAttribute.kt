package derivean.server.upgrade.u2020_11_13.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeHeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeHeroAttribute>(UpgradeHeroAttributeTable)

	var hero by UpgradeHero referencedOn UpgradeHeroTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
