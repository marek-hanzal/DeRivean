package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.BuildingAttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

/**
 * Relation from building to attributes (so which building has which attributes).
 */
class BuildingAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<BuildingAttributeEntity>(BuildingAttributeTable)

	var building by BuildingEntity referencedOn BuildingAttributeTable.building
	var attribute by AttributeEntity referencedOn BuildingAttributeTable.attribute
}
