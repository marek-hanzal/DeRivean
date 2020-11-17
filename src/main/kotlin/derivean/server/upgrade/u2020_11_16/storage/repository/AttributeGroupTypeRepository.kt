package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable

class AttributeGroupTypeRepository(container: IContainer) : AbstractRelationRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, AttributeTypeTable.group, container)
