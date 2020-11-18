package derivean.storage.repository

import derivean.storage.entities.KingdomAttributeEntity
import derivean.storage.tables.KingdomAttributeTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class KingdomAttributeRepository(container: IContainer) : AbstractRepository<KingdomAttributeEntity, KingdomAttributeTable>(KingdomAttributeEntity, KingdomAttributeTable, container)
