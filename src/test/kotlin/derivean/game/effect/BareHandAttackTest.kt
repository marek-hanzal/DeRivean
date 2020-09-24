package derivean.game.effect

import derivean.game.attribute.*
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val effect = BareHandAttack()
		val duel = Duel.build {
			source(
				10.0.strength(),
			)
			target(
				15.0.health(),
				5.0.physicalDefense(),
			)
		}

		with(effect.applyTo(duel)) {
			assertEquals(5.0, source.physicalDamage(), "Source does not given expected damage.")
			assertEquals(-5.0, target.health(), "Bare hand attack was not successful.")
		}
		assertEquals(5.0, duel.source.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, duel.target.health(), "Target does not have expected amount of health.")

		with(effect.applyTo(duel)) {
			assertEquals(5.0, source.physicalDamage(), "Source does not given expected damage.")
			assertEquals(-5.0, target.health(), "Bare hand attack was not successful.")
		}
		assertEquals(10.0, duel.source.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, duel.target.health(), "Target does not have expected amount of health.")
	}

	@Test
	fun `Bare hand attack without damage`() {
		val effect = BareHandAttack()
		val duel = Duel.build {
			source(
				10.0.strength(),
			)
			target(
				15.0.health(),
				15.0.physicalDefense(),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.0, source.physicalDamage(), "Source does unexpected damage.")
			assertEquals(-0.0, target.health(), "Something strange happened with target's health.")
		}
		assertEquals(15.0, duel.target.health(), "Target's health is different.")
	}
}
