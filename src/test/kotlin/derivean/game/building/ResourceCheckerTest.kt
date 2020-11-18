package derivean.game.building

import derivean.TestContainer
import derivean.storage.repository.BuildingRepository
import io.ktor.util.*
import leight.storage.IStorage
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertTrue

@KtorExperimentalAPI
@ExperimentalStdlibApi
class ResourceCheckerTest {
	@Test
	fun `Resource checker`() {
		val container = TestContainer.setup()
		val storage = container.create(IStorage::class)
		val buildingRepository = container.create(BuildingRepository::class)
		val resourceChecker = container.create(ResourceChecker::class)
		storage.transaction {
			assertEquals("Brewery does not meet requirements!", assertFails {
				resourceChecker.validate(
					buildingRepository.findByKingdomAndName("test", "brewery"),
					"Brewery does not meet requirements!"
				)
			}.message)
			assertTrue(
				resourceChecker.check(
					buildingRepository.findByKingdomAndName("test", "sawmill"),
				),
				"Sawmill should have requirements met!"
			)
		}
	}
}
