package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable

class KingdomRepository(container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container)
