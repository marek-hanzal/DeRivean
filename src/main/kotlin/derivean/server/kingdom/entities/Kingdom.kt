package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import derivean.server.user.entities.User
import org.jetbrains.exposed.dao.UUIDEntityClass

class Kingdom(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<Kingdom>(KingdomTable)

	var user by User referencedOn KingdomTable.user
	var name by KingdomTable.name
	override val attributes by KingdomAttribute referrersOn KingdomAttributeTable.kingdom
}
