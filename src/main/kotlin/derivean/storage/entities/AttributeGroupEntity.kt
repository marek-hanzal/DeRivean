package derivean.storage.entities

import derivean.storage.tables.AttributeTypeTable
import derivean.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeGroupEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeGroupEntity>(AttributeGroupTable)

	var name by AttributeGroupTable.name
	var description by AttributeGroupTable.description
	val types by AttributeTypeEntity referrersOn AttributeTypeTable.group
}
