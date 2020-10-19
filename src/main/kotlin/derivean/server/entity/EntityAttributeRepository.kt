package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19

typealias EntityAttributeTable = u2020_10_19.uEntityAttributeTable
typealias EntityAttribute = u2020_10_19.uEntityAttribute

class EntityAttributeRepository(container: IContainer) : AbstractRepository<EntityAttribute, EntityAttributeTable>(EntityAttribute, EntityAttributeTable, container)
