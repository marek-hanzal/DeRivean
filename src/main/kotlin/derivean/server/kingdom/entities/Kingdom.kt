package derivean.server.kingdom.entities

import derivean.lib.storage.EntityUUID
import derivean.server.user.entities.User
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Kingdom(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Kingdom>(KingdomTable)

	var user by User referencedOn KingdomTable.user
	var name by KingdomTable.name
	val attributes by KingdomAttribute referrersOn KingdomAttributeTable.kingdom
}
