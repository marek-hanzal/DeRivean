package derivean.rest

import derivean.rest.common.Attributes
import derivean.storage.repository.AttributeRepository
import leight.container.IContainer
import leight.mapper.AbstractMapper

class AttributesMapper(container: IContainer) : AbstractMapper<Attributes?, Array<AttributeRepository.AttributeData>>(container) {
	override fun map(item: Attributes?) = item?.toDistinctArray() ?: arrayOf()
}
