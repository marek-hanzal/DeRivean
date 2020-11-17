package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.AttributeGroupEntity
import derivean.storage.tables.AttributeGroupTable

class AttributeGroupRepository(container: IContainer) : AbstractRepository<AttributeGroupEntity, AttributeGroupTable>(AttributeGroupEntity, AttributeGroupTable, container) {
	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun findByNames(names: List<String>) = entity.find { table.name inList names }
}
