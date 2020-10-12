package derivean.server.entity.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.server.entity.Entity

class EntityFetchMapper(container: IContainer) : AbstractMapper<Entity, Fetch>(container) {
	override fun map(item: Entity) = Fetch.build {
		this.id = item.id
		this.name = item.name
	}
}
