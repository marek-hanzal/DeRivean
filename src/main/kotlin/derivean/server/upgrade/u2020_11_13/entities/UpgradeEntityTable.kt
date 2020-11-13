package derivean.server.upgrade.u2020_11_13.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeEntityTable : UUIDTable("entity") {
	val ancestor = reference("ancestor", UpgradeEntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
	val name = varchar("name", 64)
}
