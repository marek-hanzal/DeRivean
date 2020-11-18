package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeEntity>(AttributeTable)

	var type by AttributeTypeEntity referencedOn AttributeTable.type
	var value by AttributeTable.value
}
