package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19_03

typealias PlayerTable = u2020_10_19_03.uPlayerTable
typealias Player = u2020_10_19_03.uPlayer

class PlayerRepository(container: IContainer) : AbstractRepository<Player, PlayerTable>(Player, PlayerTable, container)
