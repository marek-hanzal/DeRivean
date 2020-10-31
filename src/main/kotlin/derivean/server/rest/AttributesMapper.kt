package derivean.server.rest

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.server.rest.common.Attributes

class AttributesMapper(container: IContainer) : AbstractMapper<Attributes?, Array<Attribute>>(container) {
	override fun map(item: Attributes?) = item?.toDistinctArray() ?: arrayOf()
}
