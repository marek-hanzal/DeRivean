package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.BuildingEntity
import derivean.storage.tables.BuildingTable

class UserBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.user, container)
