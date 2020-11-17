package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeTypeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTypeTable

class AttributeTypeRepository(container: IContainer) : AbstractRepository<AttributeTypeEntity, AttributeTypeTable>(AttributeTypeEntity, AttributeTypeTable, container)
