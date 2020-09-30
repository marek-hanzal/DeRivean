package derivean.server.entity

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.server.player.Player

class EntityService(container: IContainer) : AbstractService(container) {
	fun create(player: Player, block: Entity.() -> Unit) = Entity.new {
		this.player = player
		block(this)
	}
}
