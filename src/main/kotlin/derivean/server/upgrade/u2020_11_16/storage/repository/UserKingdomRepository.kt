package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.Kingdom
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, KingdomTable.user, container)
