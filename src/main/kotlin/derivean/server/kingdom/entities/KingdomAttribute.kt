package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.entities.Attribute
import derivean.storage.tables.AttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttribute>(KingdomAttributeTable)

	var kingdom by Kingdom referencedOn KingdomTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
