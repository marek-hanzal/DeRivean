package derivean.server.building.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

/**
 * Relation from building to attributes (so which building has which attributes).
 */
class BuildingAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<BuildingAttribute>(BuildingAttributeTable)

	var building by Building referencedOn BuildingTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
