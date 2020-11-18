package derivean.storage.repository

import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.tables.AttributeGroupTable
import derivean.storage.tables.AttributeTypeTable
import leight.container.IContainer
import leight.repository.AbstractRepository
import org.jetbrains.exposed.sql.JoinType
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, container) {
	fun findByGroupAndName(group: String, type: String) =
		entity.wrapRow(table.join(AttributeGroupTable, JoinType.INNER, table.group, AttributeGroupTable.id).selectAll().andWhere { table.name eq type }.andWhere { AttributeGroupTable.name eq group }.first())
}
