package derivean.rest

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.rest.common.Attributes
import java.util.*

class AttributesMapper(container: IContainer) : AbstractMapper<Attributes?, Array<Pair<UUID, Double>>>(container) {
	override fun map(item: Attributes?) = item?.toDistinctArray() ?: arrayOf()
}
