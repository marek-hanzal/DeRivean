package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.kingdom.entities.Kingdom
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Building(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Building>(BuildingTable)

	var kingdom by Kingdom referencedOn BuildingTable.kingdom
	var name by BuildingTable.name
	var built by BuildingTable.built
	var claim by BuildingTable.claim
	var attributes by Attribute via BuildingAttributeTable
}
