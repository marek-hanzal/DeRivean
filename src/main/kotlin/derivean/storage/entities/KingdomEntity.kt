package derivean.storage.entities

import derivean.game.attribute.Attributes
import derivean.storage.tables.BuildingTable
import derivean.storage.tables.HeroTable
import derivean.storage.tables.KingdomAttributeTable
import derivean.storage.tables.KingdomTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomEntity>(KingdomTable)

	val heroes by HeroEntity referrersOn HeroTable.kingdom
	val buildings by BuildingEntity referrersOn BuildingTable.kingdom
	var user by UserEntity referencedOn KingdomTable.user
	var name by KingdomTable.name
	var attributes by AttributeEntity via KingdomAttributeTable

	fun getProduction() = Attributes().also { attributes ->
		buildings.forEach {
			attributes.incBy(it.getProduction())
		}
	}

	fun getResources() = attributes.getAttributes("resource")
}
