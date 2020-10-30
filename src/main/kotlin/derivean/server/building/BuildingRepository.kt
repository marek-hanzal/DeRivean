package derivean.server.building

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.server.building.entities.Building
import derivean.server.building.entities.BuildingTable
import derivean.server.repository.AbstractAttributeRepository

class BuildingRepository(container: IContainer) : AbstractAttributeRepository<Building, BuildingTable>(Building, BuildingTable, container) {
	private val buildingAttributeRepository: BuildingAttributeRepository by container.lazy()

	fun attributes(id: String, vararg attributes: Attribute) {
		find(id).let { building ->
			building.attributes.forEach {
				it.delete()
			}
			for (attribute in attributes) {
				buildingAttributeRepository.create {
					this.building = building
					this.name = attribute.first
					this.value = attribute.second
				}
			}
		}
	}

	fun attributes(id: EntityUUID, vararg attributes: Attribute) = attributes(id.toString(), *attributes)
}
