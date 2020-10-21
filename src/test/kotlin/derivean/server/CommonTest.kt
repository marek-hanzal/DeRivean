package derivean.server

import derivean.game.attribute.common.health
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.entity.EntityRepository
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull

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
	private val entityRepository: EntityRepository by container.lazy()

	override fun upgrade() {
		storage.transaction {
			entityRepository.create {
				this.name = "Wind River"
				this.ancestor = entityRepository.findByName("Horwath, Greatest of Warriors")
			}.let {
				entityRepository.attributes(
					it.id,
					170.0.health(),
				)
			}
		}
	}
}
