package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.KingdomEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<KingdomEntity, KingdomTable>(KingdomEntity, KingdomTable, KingdomTable.user, container)
