package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeTypeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeTypeEntity>(AttributeTypeTable)

	var group by AttributeGroupEntity referencedOn AttributeTypeTable.group
	var name by AttributeTypeTable.name
	var description by AttributeTypeTable.description
}
