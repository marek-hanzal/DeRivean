package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.entity.entities.Entity
import derivean.server.entity.entities.EntityTable

class EntityRepository(container: IContainer) : AbstractRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
