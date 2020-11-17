package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import derivean.storage.entities.AttributeGroupEntity

class AttributeGroupRepository(container: IContainer) : AbstractRepository<AttributeGroupEntity, AttributeGroupTable>(AttributeGroupEntity, AttributeGroupTable, container) {
	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun findByNames(names: List<String>) = entity.find { table.name inList names }
}
