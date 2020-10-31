package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.AttributeEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttribute(id: EntityUUID) : AttributeEntity<Kingdom>(id) {
	companion object : UUIDEntityClass<KingdomAttribute>(KingdomAttributeTable)

	override var parent by Kingdom referencedOn KingdomAttributeTable.kingdom
	override var name by KingdomAttributeTable.name
	override var value by KingdomAttributeTable.value
}
