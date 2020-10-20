package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_20

typealias EntityAttributeTable = u2020_10_20.uEntityAttributeTable
typealias EntityAttribute = u2020_10_20.uEntityAttribute

class EntityAttributeRepository(container: IContainer) : AbstractRepository<EntityAttribute, EntityAttributeTable>(EntityAttribute, EntityAttributeTable, container)
