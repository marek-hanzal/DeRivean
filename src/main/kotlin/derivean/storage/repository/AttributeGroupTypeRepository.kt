package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.tables.AttributeTypeTable

class AttributeGroupTypeRepository(container: IContainer) : AbstractRelationRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, AttributeTypeTable.group, container)
