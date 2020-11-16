package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
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
