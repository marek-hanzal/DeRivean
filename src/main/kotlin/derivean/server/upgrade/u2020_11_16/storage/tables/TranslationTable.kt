package derivean.server.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object TranslationTable : UUIDTable("translation") {
	val language = varchar("language", 256)
	val namespace = varchar("namespace", 256)
	val label = varchar("label", 256)
	val text = text("text")

	init {
		uniqueIndex("translation_unique", language, namespace, label)
	}
}
