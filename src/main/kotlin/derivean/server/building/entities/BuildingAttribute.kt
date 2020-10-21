package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class BuildingAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<BuildingAttribute>(BuildingAttributeTable)

	var building by Building referencedOn BuildingAttributeTable.building
	var name by BuildingAttributeTable.name
	var value by BuildingAttributeTable.value
}
