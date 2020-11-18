package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class AttributeGroupTypeRepository(container: IContainer) : AbstractRelationRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, AttributeTypeTable.group, container)
