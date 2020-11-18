package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingAttributeTable
import leight.storage.EntityUUID
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
