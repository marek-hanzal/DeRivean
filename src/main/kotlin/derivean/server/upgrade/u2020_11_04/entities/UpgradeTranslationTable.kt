package derivean.server.upgrade.u2020_11_04.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeTranslationTable : UUIDTable("translation") {
	val language = varchar("language", 12)
	val namespace = varchar("namespace", 32)
	val label = varchar("label", 64)
	val text = text("text")
}
