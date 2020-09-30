package derivean.server

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.entity.EntityService
import derivean.server.player.PlayerService
import org.junit.Test
import kotlin.time.ExperimentalTime

@ExperimentalTime
class CommonTest {
	private fun setup() = EngineContainer.create {
		register(Fixtures::class) {
			Fixtures(this)
		}
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
	private val playerService: PlayerService by container.lazy()
	private val entityService: EntityService by container.lazy()

	override fun upgrade() {
		storage.transaction {
			val player = playerService.create {
				name = "Tester"
			}
			entityService.create(player) {
				name = "Wind River"
			}
		}
	}
}
