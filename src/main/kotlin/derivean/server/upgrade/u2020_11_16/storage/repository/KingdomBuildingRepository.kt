package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.BuildingEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.kingdom, container)
