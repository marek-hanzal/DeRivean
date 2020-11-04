package derivean.server.translation.entities

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class Translation(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Translation>(TranslationTable)

	var language by TranslationTable.language
	var namespace by TranslationTable.namespace
	var label by TranslationTable.label
	var translation by TranslationTable.translation
}
