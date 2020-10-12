package derivean.server

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.entity.EntityRepository
import derivean.server.player.PlayerRepository
import org.junit.Test

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
	private val playerRepository: PlayerRepository by container.lazy()
	private val entityRepository: EntityRepository by container.lazy()

	override fun upgrade() {
		storage.transaction {
			val player = playerRepository.create {
				name = "Tester"
			}
			entityRepository.create(player) {
				name = "Wind River"
			}
		}
	}
}
