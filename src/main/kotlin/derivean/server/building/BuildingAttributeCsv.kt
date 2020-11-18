package derivean.server.building

import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.AttributeTypeRepository
import derivean.storage.repository.BuildingAttributeRepository
import derivean.storage.repository.BuildingRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class BuildingAttributeCsv(container: IContainer) : AbstractCsvService(container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()
	private val buildingAttributeRepository: BuildingAttributeRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		buildingAttributeRepository.create {
			this.building = buildingRepository.findByKingdomAndName(it.kingdom, it.building)
			this.attribute = attributeRepository.create {
				this.type = attributeTypeRepository.findByGroupAndName(it.group, it.type)
				this.value = it.value
			}
		}
	}

	data class Item(
		val kingdom: String,
		val building: String,
		val group: String,
		val type: String,
		val value: Double,
	)
}
