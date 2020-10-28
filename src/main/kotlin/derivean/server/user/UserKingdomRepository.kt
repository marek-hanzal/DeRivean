package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable

class UserKingdomRepository(container: IContainer) : AbstractRelationRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, KingdomTable.user, container)
