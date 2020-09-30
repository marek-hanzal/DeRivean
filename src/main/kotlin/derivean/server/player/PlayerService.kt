package derivean.server.player

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer

class PlayerService(container: IContainer) : AbstractService(container) {
	fun create(block: Player.() -> Unit) = Player.new {
		block(this)
	}
}
