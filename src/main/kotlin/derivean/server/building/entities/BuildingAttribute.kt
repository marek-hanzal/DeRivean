package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class BuildingAttribute(id: EntityUUID) : AttributeEntity<Building>(id) {
	companion object : UUIDEntityClass<BuildingAttribute>(BuildingAttributeTable)

	override var parent by Building referencedOn BuildingAttributeTable.building
	override var name by BuildingAttributeTable.name
	override var value by BuildingAttributeTable.value
}
