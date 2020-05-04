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
	fun `Entity with an Attack`() {
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

	@Test
	fun `Entity with Defense`() {
		with(Entity.build {
			health = 10.0
			defense {
				physical = 8.0
				magical = 4.1
			}
		}) {
			assertEquals(10.0, health, "Health mismatch")
			with(defense) {
				assertEquals(8.0, physical, "Physical defense mismatch")
				assertEquals(4.1, magical, "Magical defense mismatch")
			}
		}
	}

	@Test
	fun `Get Damage from two Entities`() {
		val gandalf = Entity.build {
			health = 100.0
			attack {
				physical = 5.0
				magical = 12.0
			}
			defense {
				physical = 2.5
				magical = 4.0
			}
		}
		val aragorn = Entity.build {
			health = 160.0
			attack {
				physical = 16.0
			}
			defense {
				physical = 4.0
			}
		}
		with(gandalf.damage(aragorn)) {
			assertEquals(1.0, physical, "Gandalf hurts Aragorn with wrong physical damage")
			assertEquals(12.0, magical, "Gandalf hurts Aragorn with wrong magical damage")
		}
		with(aragorn.damage(gandalf)) {
			assertEquals(13.5, physical, "Aragorn hurts Gandalf with wrong physical damage")
			assertEquals(-4.0, magical, "Aragorn hurts Gandalf with wrong magical damage")
		}
	}
}
