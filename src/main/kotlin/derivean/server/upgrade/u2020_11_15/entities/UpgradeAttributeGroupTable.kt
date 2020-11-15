package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UpgradeAttributeGroupTable : UUIDTable("attribute-group") {
	val name = varchar("name", 64).uniqueIndex()
	val description = varchar("description", 64).nullable()
}
