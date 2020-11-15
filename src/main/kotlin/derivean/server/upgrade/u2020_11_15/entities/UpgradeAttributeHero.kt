package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeAttributeHero(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeAttributeHero>(UpgradeAttributeHeroTable)

	var hero by UpgradeHero referencedOn UpgradeHeroTable.id
	var attribute by UpgradeAttribute referencedOn UpgradeAttributeTable.id
}
