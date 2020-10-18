package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17.Player

class PlayerRepository(container: IContainer) : AbstractRepository<Player, PlayerTable>(Player, PlayerTable, container)
