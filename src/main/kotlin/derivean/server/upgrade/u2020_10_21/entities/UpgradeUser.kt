package derivean.server.upgrade.u2020_10_21.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeUser(id: EntityUUID) : EntityWithAttributes(id) {
	companion object : UUIDEntityClass<UpgradeUser>(UpgradeUserTable)

	override val attributes by UpgradeUserAttribute referrersOn UpgradeUserAttributeTable.user
	var name by UpgradeUserTable.name
	var login by UpgradeUserTable.login
	var password by UpgradeUserTable.password
	var token by UpgradeUserTable.token
	var site by UpgradeUserTable.site
}
