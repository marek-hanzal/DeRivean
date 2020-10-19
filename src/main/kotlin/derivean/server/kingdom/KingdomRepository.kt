package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19_03

typealias KingdomTable = u2020_10_19_03.uKingdomTable
typealias Kingdom = u2020_10_19_03.uKingdom

class KingdomRepository(container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container)
