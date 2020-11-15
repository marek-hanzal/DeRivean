package derivean.server.upgrade.u2020_11_15.entities

import derivean.server.attribute.entities.AttributeTable
import derivean.server.building.entities.BuildingTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeAttributeBuildingTable : UUIDTable("attribute-building") {
	val building = reference("building", BuildingTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
