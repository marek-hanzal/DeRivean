package derivean.game.building

import derivean.TestContainer
import derivean.storage.repository.BuildingRepository
import io.ktor.util.*
import leight.storage.IStorage
import org.joda.time.DateTime
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertTrue

@KtorExperimentalAPI
@ExperimentalStdlibApi
class AvailableCheckerTest {
	@Test
	fun `Available building checker`() {
		val container = TestContainer.setup()
		val storage = container.create(IStorage::class)
		val buildingRepository = container.create(BuildingRepository::class)
		val availableChecker = container.create(AvailableChecker::class)
		storage.transaction {
			assertEquals("Brewery does not meet requirements!", assertFails {
				availableChecker.validate(
					buildingRepository.findByKingdomAndName("test", "brewery"),
					"Brewery does not meet requirements!"
				)
			}.message)
			/**
			 * This should fail, because Sawmill is not claimed (thus it's not producing).
			 */
			assertEquals("Sawmill does not meet requirements!", assertFails {
				availableChecker.validate(
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
				availableChecker.validate(
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
				availableChecker.check(
					buildingRepository.findByKingdomAndName("test", "sawmill").also {
						it.claim = DateTime.now().minusMinutes(5)
					},
				),
				"Sawmill should have requirements met!"
			)
		}
	}
}
