package derivean.server.attribute

import derivean.storage.repository.AttributeGroupRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class AttributeGroupCsv(container: IContainer) : AbstractCsvService(container) {
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		attributeGroupRepository.create {
			name = it.name
			description = it.description
		}
	}

	data class Item(
		val name: String,
		val description: String?,
	)
}
