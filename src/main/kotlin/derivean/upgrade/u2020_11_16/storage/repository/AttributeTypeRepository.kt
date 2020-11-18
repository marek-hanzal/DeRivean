package derivean.upgrade.u2020_11_16.storage.repository

import derivean.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import derivean.upgrade.u2020_11_16.storage.tables.AttributeTypeTable
import leight.container.IContainer
import leight.repository.AbstractRepository
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, container) {
	fun findByGroupAndName(group: String, type: String) =
		AttributeTypeEntity.wrapRow(AttributeTypeTable.innerJoin(AttributeGroupTable).selectAll().andWhere { AttributeTypeTable.name eq type }.andWhere { AttributeGroupTable.name eq group }.first())
}
