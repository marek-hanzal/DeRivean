package derivean.server.building

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.building.entities.BuildingAttribute
import derivean.server.building.entities.BuildingAttributeTable

class BuildingAttributeRepository(container: IContainer) : AbstractRepository<BuildingAttribute, BuildingAttributeTable>(BuildingAttribute, BuildingAttributeTable, container)
