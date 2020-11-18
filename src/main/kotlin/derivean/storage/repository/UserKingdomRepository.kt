package derivean.storage.repository

import derivean.storage.entities.KingdomEntity
import derivean.storage.tables.KingdomTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<KingdomEntity, KingdomTable>(KingdomEntity, KingdomTable, KingdomTable.user, container)
