package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.entities.Kingdom
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Building(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Building>(BuildingTable)

	var kingdom by Kingdom referencedOn BuildingTable.kingdom
}
