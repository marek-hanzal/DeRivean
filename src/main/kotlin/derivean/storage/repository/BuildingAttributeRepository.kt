package derivean.storage.repository

import derivean.storage.entities.BuildingAttributeEntity
import derivean.storage.tables.BuildingAttributeTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class BuildingAttributeRepository(container: IContainer) : AbstractRepository<BuildingAttributeEntity, BuildingAttributeTable>(BuildingAttributeEntity, BuildingAttributeTable, container)
