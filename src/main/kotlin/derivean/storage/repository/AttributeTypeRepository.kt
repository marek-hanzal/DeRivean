package derivean.storage.repository

import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.tables.AttributeGroupTable
import derivean.storage.tables.AttributeTypeTable
import leight.container.IContainer
import leight.repository.AbstractRepository
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, container) {
	fun findByGroupAndName(group: String, type: String) =
		AttributeTypeEntity.wrapRow(AttributeTypeTable.innerJoin(AttributeGroupTable).selectAll().andWhere { AttributeTypeTable.name eq type }.andWhere { AttributeGroupTable.name eq group }.first())
}
