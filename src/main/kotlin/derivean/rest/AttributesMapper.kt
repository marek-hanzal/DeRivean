package derivean.rest

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.rest.common.Attributes
import derivean.storage.repository.AttributeRepository

class AttributesMapper(container: IContainer) : AbstractMapper<Attributes?, Array<AttributeRepository.AttributeData>>(container) {
	override fun map(item: Attributes?) = item?.toDistinctArray() ?: arrayOf()
}
