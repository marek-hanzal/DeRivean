package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.BuildingAttributeTable
import derivean.storage.tables.BuildingTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class BuildingEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<BuildingEntity>(BuildingTable)

	var user by UserEntity referencedOn BuildingTable.user
	var kingdom by KingdomEntity referencedOn BuildingTable.kingdom
	var name by BuildingTable.name
	var description by BuildingTable.description
	var built by BuildingTable.built
	var claim by BuildingTable.claim
	var attributes by AttributeEntity via BuildingAttributeTable
}
