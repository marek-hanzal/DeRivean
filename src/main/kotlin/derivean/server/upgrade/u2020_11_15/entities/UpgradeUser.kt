package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeUser(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeUser>(UpgradeUserTable)

	var attributes by UpgradeAttribute via UpgradeUserAttributeTable
	val kingdoms by UpgradeKingdom referrersOn UpgradeKingdomTable.user
	var roles by UpgradeRole via UpgradeUserRoleTable

	var name by UpgradeUserTable.name
	var login by UpgradeUserTable.login
	var password by UpgradeUserTable.password
	var site by UpgradeUserTable.site
	var ticket by UpgradeUserTable.ticket
}
