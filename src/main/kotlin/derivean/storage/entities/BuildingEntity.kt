package derivean.storage.entities

import derivean.game.attribute.Attributes
import derivean.storage.tables.BuildingAttributeTable
import derivean.storage.tables.BuildingTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class BuildingEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<BuildingEntity>(BuildingTable)

	var user by UserEntity referencedOn BuildingTable.user
	var kingdom by KingdomEntity referencedOn BuildingTable.kingdom
	var attributes by AttributeEntity via BuildingAttributeTable

	var name by BuildingTable.name
	var description by BuildingTable.description
	var build by BuildingTable.build
	var claim by BuildingTable.claim

	fun getProduction() = if (isClaimed()) attributes.getAttributes("production") else Attributes()
	fun getProductionRequirements() = attributes.getAttributes("production.requirement")
	fun getCost() = attributes.getAttributes("cost")
	fun isBuilt() = build?.isBeforeNow ?: false
	fun isClaimed() = claim?.isBeforeNow ?: false
}
