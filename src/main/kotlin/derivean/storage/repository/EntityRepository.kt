package derivean.storage.repository

import derivean.storage.entities.EntityEntity
import derivean.storage.tables.EntityTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class EntityRepository(container: IContainer) : AbstractRepository<EntityEntity, EntityTable>(EntityEntity, EntityTable, container) {
	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
