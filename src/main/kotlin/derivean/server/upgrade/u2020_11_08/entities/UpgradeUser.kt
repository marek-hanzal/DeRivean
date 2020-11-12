package derivean.server.upgrade.u2020_11_08.entities

import derivean.lib.storage.EntityUUID
import derivean.server.attribute.EntityWithAttributes
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeUser(id: EntityUUID) : EntityWithAttributes<UpgradeUserAttribute>(id) {
	companion object : UUIDEntityClass<UpgradeUser>(UpgradeUserTable)

	override val attributes by UpgradeUserAttribute referrersOn UpgradeUserAttributeTable.user
	val kingdoms by UpgradeKingdom referrersOn UpgradeKingdomTable.user
	var roles by UpgradeRole via UpgradeUserRoleTable

	var name by UpgradeUserTable.name
	var login by UpgradeUserTable.login
	var password by UpgradeUserTable.password
	var site by UpgradeUserTable.site
	var ticket by UpgradeUserTable.ticket
}
