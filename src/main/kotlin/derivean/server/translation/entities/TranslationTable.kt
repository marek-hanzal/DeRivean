package derivean.server.translation.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object TranslationTable : UUIDTable("translation") {
	val language = varchar("language", 12)
	val namespace = varchar("namespace", 32)
	val label = varchar("label", 64)
	val translation = text("translation")
}
