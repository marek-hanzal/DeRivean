package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.Kingdom
import derivean.storage.tables.KingdomTable

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, KingdomTable.user, container)
