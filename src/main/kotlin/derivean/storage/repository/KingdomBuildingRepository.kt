package derivean.storage.repository

import derivean.storage.entities.BuildingEntity
import derivean.storage.tables.BuildingTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository
import leight.repository.Paging
import org.jetbrains.exposed.sql.SortOrder
import java.util.*

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.kingdom, container) {
	override fun source(relation: UUID, paging: Paging) = entity.find { column eq relation }.orderBy(BuildingTable.name to SortOrder.ASC).limit(paging.limit, paging.offset)
}
