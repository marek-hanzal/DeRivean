package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19
import derivean.server.upgrade.u2020_10_19.uPlayer

typealias PlayerTable = u2020_10_19.uPlayerTable
typealias Player = u2020_10_19.uPlayer

class PlayerRepository(container: IContainer) : AbstractRepository<uPlayer, PlayerTable>(uPlayer, PlayerTable, container)
