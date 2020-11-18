package derivean.upgrade.u2020_11_16.storage.repository

import derivean.upgrade.u2020_11_16.storage.entities.AttributeGroupEntity
import derivean.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class AttributeGroupRepository(container: IContainer) : AbstractRepository<AttributeGroupEntity, AttributeGroupTable>(AttributeGroupEntity, AttributeGroupTable, container) {
	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun findByNames(names: List<String>) = entity.find { table.name inList names }
}
