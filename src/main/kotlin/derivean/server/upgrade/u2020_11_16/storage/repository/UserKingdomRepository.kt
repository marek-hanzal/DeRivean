package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.KingdomEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<KingdomEntity, KingdomTable>(KingdomEntity, KingdomTable, KingdomTable.user, container)
