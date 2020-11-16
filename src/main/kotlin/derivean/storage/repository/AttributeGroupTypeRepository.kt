package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.AttributeType
import derivean.storage.tables.AttributeTypeTable

class AttributeGroupTypeRepository(container: IContainer) : AbstractRelationRepository<AttributeType, AttributeTypeTable>(AttributeType, AttributeTypeTable, AttributeTypeTable.group, container)
