package derivean.server.upgrade.u2020_11_15.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class UpgradeTranslation(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UpgradeTranslation>(UpgradeTranslationTable)

	var language by UpgradeTranslationTable.language
	var namespace by UpgradeTranslationTable.namespace
	var label by UpgradeTranslationTable.label
	var text by UpgradeTranslationTable.text
}
