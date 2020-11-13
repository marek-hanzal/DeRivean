package derivean.server.upgrade.u2020_11_13.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeAttributeTable : UUIDTable("attribute") {
	val name = varchar("name", 128)
	val value = double("value")
}
