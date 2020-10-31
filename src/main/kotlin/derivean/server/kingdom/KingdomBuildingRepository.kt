package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.building.entities.Building
import derivean.server.building.entities.BuildingTable

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<Building, BuildingTable>(Building, BuildingTable, BuildingTable.kingdom, container)
