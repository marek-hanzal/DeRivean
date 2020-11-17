package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.KingdomAttributeTable
import derivean.storage.tables.KingdomTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttributeEntity>(KingdomAttributeTable)

	var kingdom by KingdomEntity referencedOn KingdomTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
