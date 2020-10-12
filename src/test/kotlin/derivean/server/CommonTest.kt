package derivean.server

import derivean.game.attribute.common.health
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.entity.EntityRepository
import derivean.server.player.PlayerRepository
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

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
		val storage = container.create(IStorage::class)
		val entityRepository = container.create(EntityRepository::class)
		storage.transaction {
			val windRiver = entityRepository.findByName("Wind River")
			assertNotNull(windRiver)
			assertNotNull(windRiver.ancestor)
			assertEquals("Horwath, Greatest of Warriors", windRiver.ancestor?.name)
			assertEquals("Gwork, The First Human", windRiver.ancestor?.ancestor?.name)
			// entityService.from(windRiver) - test ancestors attributes, ...
		}
	}
}

class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	private val playerRepository: PlayerRepository by container.lazy()
	private val entityRepository: EntityRepository by container.lazy()

	override fun upgrade() {
		storage.transaction {
			playerRepository.create {
				this.name = "Tester"
			}.let { player ->
				entityRepository.create(player, "Horwath, Greatest of Warriors") {
					this.name = "Wind River"
				}.let {
					entityRepository.attributes(
						it,
						170.0.health(),
					)
				}
			}
		}
	}
}
