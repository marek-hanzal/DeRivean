package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository

class EntityAttributeRepository(container: IContainer) : AbstractRepository<EntityAttribute, EntityAttributeTable>(EntityAttribute, EntityAttributeTable, container)
