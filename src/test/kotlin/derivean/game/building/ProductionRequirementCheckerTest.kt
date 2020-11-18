package derivean.game.building

import derivean.ServerContainer
import derivean.server.building.BuildingAttributeCsv
import derivean.server.kingdom.KingdomAttributeCsv
import derivean.server.kingdom.KingdomBuildingCsv
import derivean.storage.repository.BuildingRepository
import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import io.ktor.util.*
import leight.container.IContainer
import leight.storage.IStorage
import leight.upgrade.AbstractUpgrade
import leight.upgrade.IUpgradeManager
import org.joda.time.DateTime
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertTrue

@KtorExperimentalAPI
@ExperimentalStdlibApi
class ProductionRequirementCheckerTest {
	private fun setup() = ServerContainer.create {
		register(Fixtures::class) {
			Fixtures(this)
		}
		configurator(IUpgradeManager::class) {
			register(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}


	@Test
	fun `Production requirement`() {
		val container = setup()
		val storage = container.create(IStorage::class)
		val buildingRepository = container.create(BuildingRepository::class)
		val productionRequirementChecker = container.create(ProductionRequirementChecker::class)
		storage.transaction {
			assertEquals("Brewery does not meet requirements!", assertFails {
				productionRequirementChecker.validate(
					buildingRepository.findByKingdomAndName("test", "brewery"),
					"Brewery does not meet requirements!"
				)
			}.message)
			/**
			 * This should fail, because Sawmill is not claimed (thus it's not producing).
			 */
			assertEquals("Sawmill does not meet requirements!", assertFails {
				productionRequirementChecker.validate(
					buildingRepository.findByKingdomAndName("test", "sawmill"),
					"Sawmill does not meet requirements!"
				)
			}.message)
		}
		storage.transaction {
			/**
			 * Even when this building is claimed, there are missing producers of required materials (this situation
			 * should not happen in general, but it's here to test proper logic).
			 */
			assertEquals("Sawmill does not meet requirements!", assertFails {
				productionRequirementChecker.validate(
					buildingRepository.findByKingdomAndName("test", "sawmill").also {
						it.claim = DateTime.now().minusMinutes(5)
					},
					"Sawmill does not meet requirements!"
				)
			}.message)
		}
		storage.transaction {
			/**
			 * These buildings must be claimed to produce required materials for sawmill.
			 */
			buildingRepository.findByKingdomAndName("test", "lumberjack").claim = DateTime.now().minusMinutes(5)
			buildingRepository.findByKingdomAndName("test", "quarry").claim = DateTime.now().minusMinutes(5)
		}
		storage.transaction {
			/**
			 * Test sawmill again, just set claim date (it's same like a player clicks on claim button).
			 */
			assertTrue(
				productionRequirementChecker.check(
					buildingRepository.findByKingdomAndName("test", "sawmill").also {
						it.claim = DateTime.now().minusMinutes(5)
					},
				),
				"Sawmill should have requirements met!"
			)
		}
	}
}

@ExperimentalStdlibApi
class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val kingdomAttributeCsv: KingdomAttributeCsv by container.lazy()
	private val kingdomBuildingCsv: KingdomBuildingCsv by container.lazy()
	private val buildingAttributeCsv: BuildingAttributeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			kingdomRepository.create {
				this.user = userRepository.findByLogin("template")
				this.name = "test"
			}
		}
		storage.write {
			kingdomAttributeCsv.import("fixtures/kingdom-attributes.csv")
		}
		storage.write {
			kingdomBuildingCsv.import("fixtures/kingdom-buildings.csv")
		}
		storage.write {
			buildingAttributeCsv.import("fixtures/building-attributes.csv")
		}
	}
}
