package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class AttackTest {
	@Test
	fun `Empty Attack builder`() {
		with(Attack.build {}) {
			assertEquals(0.0, physical)
			assertEquals(0.0, magical)
		}
	}

	@Test
	fun `Attack against Defense`() {
		with(Attack.build {
			physical = 2.0
			magical = 0.5
		}) {
			damage(Defense.build {
				physical = 0.5
				magical = 1.0
			}).let {
				assertEquals(1.5, it.physical, "Defense against physical attack does not work")
				assertEquals(-0.5, it.magical, "Defense against magical attack does not work")
			}
		}
	}

	@Test
	fun `Attack versus Defense`() {
		val attack = Attack.build {
			physical = 5.0
			magical = 12.0
		}
		val defense = Defense.build {
			physical = 4.0
		}
		with(attack.damage(defense)) {
			assertEquals(1.0, physical, "Wrong physical damage")
			assertEquals(12.0, magical, "Wrong magical damage")
		}
	}

	@Test
	fun `Attack using weakness (negative defense)`() {
		val attack = Attack.build {
			physical = 2.0
			magical = 12.0
		}
		val defense = Defense.build {
			physical = 4.0
			magical = -2.5
		}
		with(attack.damage(defense)) {
			assertEquals(-2.0, physical, "Wrong physical damage")
			assertEquals(14.5, magical, "Wrong magical damage")
		}
	}
}
