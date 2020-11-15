package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeHero(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeHero>(UpgradeHeroTable)

	var user by UpgradeUser referencedOn UpgradeHeroTable.user
	var kingdom by UpgradeKingdom referencedOn UpgradeHeroTable.kingdom
	var name by UpgradeHeroTable.name
	var attributes by UpgradeAttribute via UpgradeHeroAttributeTable
}
