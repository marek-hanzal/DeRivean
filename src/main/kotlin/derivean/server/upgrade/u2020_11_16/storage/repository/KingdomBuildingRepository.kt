package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.BuildingEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class KingdomBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.kingdom, container)
