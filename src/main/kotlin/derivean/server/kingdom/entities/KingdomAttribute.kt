package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttribute>(KingdomAttributeTable)

	var kingdom by Kingdom referencedOn KingdomAttributeTable.kingdom
	var name by KingdomAttributeTable.name
	var value by KingdomAttributeTable.value
}
