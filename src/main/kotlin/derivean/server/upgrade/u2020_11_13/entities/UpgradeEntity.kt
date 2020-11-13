package derivean.server.upgrade.u2020_11_13.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeEntity>(UpgradeEntityTable)

	var ancestor by UpgradeEntity optionalReferencedOn UpgradeEntityTable.ancestor
	var name by UpgradeEntityTable.name
	val attributes by UpgradeAttribute via UpgradeEntityAttributeTable
}
