package derivean.server.entity

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.repository.UnknownEntityException
import derivean.server.player.Player
import java.util.*

class EntityRepository(container: IContainer) : AbstractRepository<Entity>(container) {
	fun create(player: Player, block: Entity.() -> Unit) = Entity.new {
		this.player = player
		block(this)
	}

	override fun getById(uuid: UUID) = Entity.findById(uuid) ?: throw UnknownEntityException("Requested an unknown Entity [${uuid}].")
}
