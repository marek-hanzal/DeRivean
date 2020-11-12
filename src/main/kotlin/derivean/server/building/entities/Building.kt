package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import derivean.server.kingdom.entities.Kingdom
import org.jetbrains.exposed.dao.UUIDEntityClass

class Building(id: EntityUUID) : EntityWithAttributes<BuildingAttribute>(id) {
	companion object : UUIDEntityClass<Building>(BuildingTable)

	var kingdom by Kingdom referencedOn BuildingTable.kingdom
	override val attributes by BuildingAttribute referrersOn BuildingAttributeTable.building
	var name by BuildingTable.name
}
