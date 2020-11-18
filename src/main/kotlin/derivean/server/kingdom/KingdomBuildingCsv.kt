package derivean.server.kingdom

import derivean.storage.repository.BuildingRepository
import derivean.storage.repository.KingdomRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class KingdomBuildingCsv(container: IContainer) : AbstractCsvService(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		buildingRepository.create {
			this.kingdom = kingdomRepository.findByName(it.kingdom)
			this.user = this.kingdom.user
			this.name = it.name
			this.description = it.description
		}
	}

	data class Item(
		val kingdom: String,
		val name: String,
		val description: String?,
	)
}
