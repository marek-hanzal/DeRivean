package derivean.server.upgrade.u2020_11_16.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object HeroTable : UUIDTable("hero") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 128)
}
