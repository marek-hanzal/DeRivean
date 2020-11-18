package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeGroupEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeGroupEntity>(AttributeGroupTable)

	var name by AttributeGroupTable.name
	var description by AttributeGroupTable.description
	val types by AttributeTypeEntity referrersOn AttributeTypeTable.group
}
