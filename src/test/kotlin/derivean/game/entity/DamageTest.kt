package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class DamageTest {
	@Test
	fun `Damage empty Builder`() {
		with(Damage.build {}) {
			assertEquals(0.0, physical)
			assertEquals(0.0, magical)
		}
	}

	@Test
	fun `Damage Builder`() {
		with(Damage.build {
			physical = 12.5
			magical = 2.5
		}) {
			assertEquals(12.5, physical)
			assertEquals(2.5, magical)
			assertEquals(-15.0, entity().health)
		}
	}

	@Test
	fun `Damage Builder with negative damage`() {
		with(Damage.build {
			physical = 12.5
			magical = -2.5
		}) {
			assertEquals(12.5, physical)
			assertEquals(-2.5, magical)
			assertEquals(-12.5, entity().health)
		}
	}
}
