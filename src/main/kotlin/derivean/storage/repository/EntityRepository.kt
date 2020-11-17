package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.EntityEntity
import derivean.storage.tables.EntityTable

class EntityRepository(container: IContainer) : AbstractRepository<EntityEntity, EntityTable>(EntityEntity, EntityTable, container) {
	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
