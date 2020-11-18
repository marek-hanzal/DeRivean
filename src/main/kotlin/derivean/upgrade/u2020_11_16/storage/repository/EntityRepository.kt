package derivean.upgrade.u2020_11_16.storage.repository

import derivean.upgrade.u2020_11_16.storage.entities.EntityEntity
import derivean.upgrade.u2020_11_16.storage.tables.EntityTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class EntityRepository(container: IContainer) : AbstractRepository<EntityEntity, EntityTable>(EntityEntity, EntityTable, container) {
	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
