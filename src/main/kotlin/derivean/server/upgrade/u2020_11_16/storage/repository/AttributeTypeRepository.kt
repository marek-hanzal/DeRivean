package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeGroupTable
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, container) {
	fun findByGroupAndName(group: String, type: String) =
		AttributeTypeEntity.wrapRow(AttributeTypeTable.innerJoin(AttributeGroupTable).selectAll().andWhere { AttributeTypeTable.name eq type }.andWhere { AttributeGroupTable.name eq group }.first())
}
