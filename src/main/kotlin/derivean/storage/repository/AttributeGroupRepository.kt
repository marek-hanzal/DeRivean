package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.AttributeGroup
import derivean.storage.tables.AttributeGroupTable

class AttributeGroupRepository(container: IContainer) : AbstractRepository<AttributeGroup, AttributeGroupTable>(AttributeGroup, AttributeGroupTable, container) {
	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
