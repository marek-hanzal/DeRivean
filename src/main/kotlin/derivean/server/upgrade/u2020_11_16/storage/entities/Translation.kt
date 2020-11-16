package derivean.server.upgrade.u2020_11_16.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.TranslationTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Translation(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Translation>(TranslationTable)

	var language by TranslationTable.language
	var namespace by TranslationTable.namespace
	var label by TranslationTable.label
	var text by TranslationTable.text
}
