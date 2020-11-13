package derivean.server.building.entities

import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.jodatime.datetime

object BuildingTable : UUIDTable("building") {
	val kingdom = reference("kingdom", KingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val built = datetime("built").nullable()
}
