package derivean.server.attribute.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class AttributeGroup(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeGroup>(AttributeGroupTable)

	var name by AttributeGroupTable.name
	var description by AttributeGroupTable.description
}
