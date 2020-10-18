package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17.uPlayer

class PlayerRepository(container: IContainer) : AbstractRepository<uPlayer, PlayerTable>(uPlayer, PlayerTable, container)
