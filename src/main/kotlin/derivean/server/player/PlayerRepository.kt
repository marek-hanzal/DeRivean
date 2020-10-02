package derivean.server.player

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.repository.UnknownEntityException
import java.util.*

class PlayerRepository(container: IContainer) : AbstractRepository<Player>(container) {
	fun create(block: Player.() -> Unit) = Player.new {
		block(this)
	}

	override fun getById(uuid: UUID) = Player.findById(uuid) ?: throw UnknownEntityException("Requested an unknown Entity [${uuid}].")
}