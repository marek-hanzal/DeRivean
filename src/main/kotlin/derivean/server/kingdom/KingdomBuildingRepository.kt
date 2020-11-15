package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.Building
import derivean.storage.tables.BuildingTable

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<Building, BuildingTable>(Building, BuildingTable, BuildingTable.kingdom, container)
