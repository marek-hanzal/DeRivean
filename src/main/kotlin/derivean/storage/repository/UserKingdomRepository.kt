package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.KingdomEntity
import derivean.storage.tables.KingdomTable

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<KingdomEntity, KingdomTable>(KingdomEntity, KingdomTable, KingdomTable.user, container)
