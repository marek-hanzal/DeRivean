package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomAttributeTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class KingdomAttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<KingdomAttributeEntity>(KingdomAttributeTable)

	var kingdom by KingdomEntity referencedOn KingdomTable.id
	var attribute by AttributeEntity referencedOn AttributeTable.id
}
