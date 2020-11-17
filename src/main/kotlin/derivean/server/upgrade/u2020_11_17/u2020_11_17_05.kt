package derivean.server.upgrade.u2020_11_17

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.building.BuildingAttributeCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.entities.BuildingAttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.repository.AttributeTypeRepository
import derivean.server.upgrade.u2020_11_16.storage.repository.BuildingRepository

@ExperimentalStdlibApi
class u2020_11_17_05(container: IContainer) : AbstractUpgrade(container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun upgrade() {
		storage.write {
			BuildingAttributeCsv.load("upgrade/u2020_11_17/building-attributes.csv").forEach {
				BuildingAttributeEntity.new {
					this.building = buildingRepository.findByKingdomAndName(it.kingdom, it.building)
					this.attribute = AttributeEntity.new {
						this.type = attributeTypeRepository.findByGroupAndName(it.group, it.type)
						this.value = it.value
					}
				}
			}
		}
	}
}
