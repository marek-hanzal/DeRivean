package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.Building
import derivean.storage.tables.BuildingTable

class UserBuildingRepository(container: IContainer) : AbstractRelationRepository<Building, BuildingTable>(Building, BuildingTable, BuildingTable.user, container)
