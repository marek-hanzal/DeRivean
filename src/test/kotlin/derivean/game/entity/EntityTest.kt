package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class EntityTest {
	@Test
	fun `Empty Entity builder`() {
		with(Entity.build {}) {
			assertEquals(0.0, health, "Health mismatch")
		}
	}

	@Test
	fun `Entity with health`() {
		with(Entity.build {
			health = 10.0
		}) {
			assertEquals(10.0, health, "Health mismatch")
		}
	}

	@Test
	fun `Entity with attack`() {
		with(Entity.build {
			health = 10.0
			attack {
				physical = 12.5
				magical = 5.0
			}
		}) {
			assertEquals(10.0, health, "Health mismatch")
			with(attack) {
				assertEquals(12.5, physical, "Physical attack mismatch")
				assertEquals(5.0, magical, "Magical attack mismatch")
			}
		}
	}
}
