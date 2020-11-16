package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.AttributeType
import derivean.storage.tables.AttributeTypeTable

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeType, AttributeTypeTable>(AttributeType, AttributeTypeTable, container)
