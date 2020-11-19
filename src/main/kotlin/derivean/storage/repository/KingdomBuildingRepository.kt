package derivean.storage.repository

import derivean.storage.entities.BuildingEntity
import derivean.storage.tables.BuildingTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository
import leight.repository.EntityFilter
import leight.repository.Paging
import org.jetbrains.exposed.sql.SortOrder
import java.util.*

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.kingdom, container) {
	override fun page(relation: UUID, paging: Paging, block: (BuildingEntity) -> Unit, filter: EntityFilter<BuildingEntity>?) {
		entity.find { column eq relation }.orderBy(BuildingTable.name to SortOrder.ASC).limit(paging.limit, paging.offset).let { collection ->
			(filter?.let { collection.filter(filter) } ?: collection).forEach { block(it) }
		}
	}
}
