package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19
import derivean.server.upgrade.u2020_10_19.EntityAttribute

typealias EntityAttributeTable = u2020_10_19.EntityAttributeTable
typealias EntityAttribute = u2020_10_19.EntityAttribute

class EntityAttributeRepository(container: IContainer) : AbstractRepository<EntityAttribute, EntityAttributeTable>(EntityAttribute, EntityAttributeTable, container)
