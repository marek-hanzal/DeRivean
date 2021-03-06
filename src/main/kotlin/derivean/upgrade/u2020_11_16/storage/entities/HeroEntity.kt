package derivean.upgrade.u2020_11_16.storage.entities

import derivean.upgrade.u2020_11_16.storage.tables.HeroAttributeTable
import derivean.upgrade.u2020_11_16.storage.tables.HeroTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class HeroEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<HeroEntity>(HeroTable)

	var user by UserEntity referencedOn HeroTable.user
	var kingdom by KingdomEntity referencedOn HeroTable.kingdom
	var name by HeroTable.name
	var attributes by AttributeEntity via HeroAttributeTable
}
