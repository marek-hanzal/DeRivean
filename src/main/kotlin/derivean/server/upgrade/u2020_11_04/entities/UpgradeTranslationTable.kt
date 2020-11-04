package derivean.server.upgrade.u2020_11_04.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeTranslationTable : UUIDTable("translation") {
	val language = varchar("language", 256)
	val namespace = varchar("namespace", 256)
	val label = varchar("label", 256)
	val text = text("text")
}