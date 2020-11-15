package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.BuildingAttributeTable
import derivean.storage.tables.BuildingTable
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
