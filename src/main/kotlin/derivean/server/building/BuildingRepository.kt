package derivean.server.building

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.building.entities.Building
import derivean.server.building.entities.BuildingTable

class BuildingRepository(container: IContainer) : AbstractAttributeRepository<Building, BuildingTable>(Building, BuildingTable, container) {
	override val attributeRepository: BuildingAttributeRepository by container.lazy()
}
