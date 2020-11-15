package derivean.storage.tables

import derivean.server.kingdom.entities.KingdomTable
import derivean.server.user.entities.UserTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.jodatime.datetime

object BuildingTable : UUIDTable("building") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val description = varchar("description", 128).nullable()
	val built = datetime("built").nullable()
	val claim = datetime("claim").nullable()
}
