package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.storage.tables.TranslationTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class TranslationEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TranslationEntity>(TranslationTable)

	var language by TranslationTable.language
	var namespace by TranslationTable.namespace
	var label by TranslationTable.label
	var text by TranslationTable.text
}
