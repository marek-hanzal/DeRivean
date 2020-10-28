package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.kingdom.entities.KingdomAttribute
import derivean.server.kingdom.entities.KingdomAttributeTable

class KingdomAttributeRepository(container: IContainer) : AbstractRepository<KingdomAttribute, KingdomAttributeTable>(KingdomAttribute, KingdomAttributeTable, container)
