package derivean.server.attribute

import derivean.storage.repository.AttributeGroupRepository
import derivean.storage.repository.AttributeTypeRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class AttributeTypeCsv(container: IContainer) : AbstractCsvService(container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		attributeTypeRepository.create {
			group = attributeGroupRepository.findByName(it.group)
			name = it.name
			description = it.description
		}
	}

	data class Item(
		val group: String,
		val name: String,
		val description: String?,
	)
}
