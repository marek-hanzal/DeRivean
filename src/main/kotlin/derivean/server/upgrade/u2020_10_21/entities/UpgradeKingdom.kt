package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeKingdom(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeKingdom>(UpgradeKingdomTable)

	val heroes by UpgradeHero referrersOn UpgradeHeroTable.kingdom
	var user by UpgradeUser referencedOn UpgradeKingdomTable.user
	var name by UpgradeKingdomTable.name
}
