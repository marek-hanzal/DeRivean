package derivean.server.kingdom

import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.AttributeTypeRepository
import derivean.storage.repository.KingdomAttributeRepository
import derivean.storage.repository.KingdomRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class KingdomAttributeCsv(container: IContainer) : AbstractCsvService(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val kingdomAttributeRepository: KingdomAttributeRepository by container.lazy()
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		kingdomAttributeRepository.create {
			this.kingdom = kingdomRepository.findByName(it.kingdom)
			this.attribute = attributeRepository.create {
				this.type = attributeTypeRepository.findByGroupAndName(it.group, it.type)
				this.value = it.value
			}
		}
	}

	data class Item(
		val kingdom: String,
		val group: String,
		val type: String,
		val value: Double,
	)
}
