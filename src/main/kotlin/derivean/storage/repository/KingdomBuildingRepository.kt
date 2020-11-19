package derivean.storage.repository

import derivean.storage.entities.BuildingEntity
import derivean.storage.tables.BuildingTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.kingdom, container)
