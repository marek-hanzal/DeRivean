package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeGroup
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeGroupTable

class AttributeGroupRepository(container: IContainer) : AbstractRepository<AttributeGroup, AttributeGroupTable>(AttributeGroup, AttributeGroupTable, container)
