package derivean.upgrade.u2020_11_16.storage.entities

import derivean.upgrade.u2020_11_16.storage.tables.BuildingAttributeTable
import derivean.upgrade.u2020_11_16.storage.tables.BuildingTable
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
}
