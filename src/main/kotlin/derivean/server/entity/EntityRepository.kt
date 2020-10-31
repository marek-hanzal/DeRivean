package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.entity.entities.Entity
import derivean.server.entity.entities.EntityTable

class EntityRepository(container: IContainer) : AbstractAttributeRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	override val attributeRepository: EntityAttributeRepository by container.lazy()

	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
