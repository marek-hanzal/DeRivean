package derivean.storage.repository

import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.tables.AttributeTypeTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class AttributeGroupTypeRepository(container: IContainer) : AbstractRelationRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, AttributeTypeTable.group, container)
