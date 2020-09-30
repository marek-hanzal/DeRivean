package derivean.server

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.entity.Entity
import derivean.server.player.Player
import org.junit.Test
import kotlin.time.ExperimentalTime

@ExperimentalTime
class CommonTest {
	private fun setup() = EngineContainer.create {
		configurator(IUpgradeManager::class) {
			register(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}

	@Test
	fun `Entity from database`() {
		val container = setup()
	}
}

class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			val player = Player.new {
				name = "Tester"
			}
			Entity.new {
				name = "Wind River"
				this.player = player
			}
		}
	}
}
