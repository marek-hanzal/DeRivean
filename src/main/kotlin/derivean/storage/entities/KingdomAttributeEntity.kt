package derivean.storage.entities

import derivean.storage.tables.KingdomAttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttributeEntity>(KingdomAttributeTable)

	var kingdom by KingdomEntity referencedOn KingdomAttributeTable.kingdom
	var attribute by AttributeEntity referencedOn KingdomAttributeTable.attribute
}
