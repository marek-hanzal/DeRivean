package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeHero(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<UpgradeHero>(UpgradeHeroTable)

	var user by UpgradeUser referencedOn UpgradeHeroTable.user
	var kingdom by UpgradeKingdom referencedOn UpgradeHeroTable.kingdom
	var name by UpgradeHeroTable.name
	override val attributes by UpgradeHeroAttribute referrersOn UpgradeHeroAttributeTable.hero
}
