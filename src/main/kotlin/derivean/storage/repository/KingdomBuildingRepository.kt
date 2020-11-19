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
		fun source(paging: Paging) = entity.find { column eq relation }.orderBy(BuildingTable.name to SortOrder.ASC).limit(paging.limit, paging.offset)

		var current = paging
		var contract = 0
		var size: Long = 1
		while (contract < size && size > 0) {
			source(current).let { collection ->
				size = collection.count()
				(filter?.let { collection.filter(filter) } ?: collection).let {
					it.forEach { item -> block(item) }
					contract += it.count()
				}
				current = Paging(current.page + 1, current.limit)
			}
		}
	}
}
