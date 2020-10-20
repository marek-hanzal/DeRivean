package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository

class KingdomRepository(container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container)
