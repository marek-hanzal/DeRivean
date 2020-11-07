package derivean.server.user.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.dao.UUIDEntityClass

class User(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<User>(UserTable)

	override val attributes by UserAttribute referrersOn UserAttributeTable.user
	val kingdoms by Kingdom referrersOn KingdomTable.user
	var name by UserTable.name
	var login by UserTable.login
	var password by UserTable.password
	var token by UserTable.token
	var site by UserTable.site
}
