package derivean.server.translation.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object TranslationTable : UUIDTable("translation") {
	val language = varchar("language", 256)
	val namespace = varchar("namespace", 256)
	val label = varchar("label", 256)
	val text = text("text")
}
