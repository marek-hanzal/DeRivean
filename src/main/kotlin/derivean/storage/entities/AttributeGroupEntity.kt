package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeGroupTable
import derivean.storage.tables.AttributeTypeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeGroupEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeGroupEntity>(AttributeGroupTable)

	var name by AttributeGroupTable.name
	var description by AttributeGroupTable.description
	val types by AttributeTypeEntity referrersOn AttributeTypeTable.group
}
