package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.player.Player

class u2020_10_12(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			Player.new {
				name = "The God"
			}
		}
	}
}
