package derivean.upgrade.u2020_11_16.storage.repository

import derivean.upgrade.u2020_11_16.storage.entities.BuildingEntity
import derivean.upgrade.u2020_11_16.storage.tables.BuildingTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class UserBuildingRepository(container: IContainer) : AbstractRelationRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, BuildingTable.user, container)
