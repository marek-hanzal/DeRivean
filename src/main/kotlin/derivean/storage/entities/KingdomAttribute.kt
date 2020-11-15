package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.KingdomAttributeTable
import derivean.storage.tables.KingdomTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttribute>(KingdomAttributeTable)

	var kingdom by Kingdom referencedOn KingdomTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
