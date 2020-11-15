package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.BuildingAttributeTable
import derivean.storage.tables.BuildingTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Building(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Building>(BuildingTable)

	var user by User referencedOn BuildingTable.user
	var kingdom by Kingdom referencedOn BuildingTable.kingdom
	var name by BuildingTable.name
	var description by BuildingTable.description
	var built by BuildingTable.built
	var claim by BuildingTable.claim
	var attributes by Attribute via BuildingAttributeTable
}
