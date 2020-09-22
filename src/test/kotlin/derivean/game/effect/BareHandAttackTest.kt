package derivean.game.effect

import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.PhysicalAttributes
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val effect = BareHandAttack()
		val duel = Duel.build {
			source(
				CommonAttributes.strength(10),
			)
			target(
				CommonAttributes.health(15),
				PhysicalAttributes.defense(5),
			)
		}

		with(effect.applyTo(duel)) {
			assertEquals(5.0, PhysicalAttributes.damage(source), "Source does not given expected damage.")
			assertEquals(-5.0, CommonAttributes.health(target), "Bare hand attack was not successful.")
		}
		assertEquals(5.0, PhysicalAttributes.damage(duel.source), "Source does not contain expected amount of damage.")
		assertEquals(10.0, CommonAttributes.health(duel.target), "Target does not have expected amount of health.")

		with(effect.applyTo(duel)) {
			assertEquals(5.0, PhysicalAttributes.damage(source), "Source does not given expected damage.")
			assertEquals(-5.0, CommonAttributes.health(target), "Bare hand attack was not successful.")
		}
		assertEquals(5.0, PhysicalAttributes.damage(duel.source), "Source does not contain expected amount of damage.")
		assertEquals(10.0, CommonAttributes.health(duel.target), "Target does not have expected amount of health.")
	}

	@Test
	fun `Bare hand attack without damage`() {
		val effect = BareHandAttack()
		val duel = Duel.build {
			source(
				CommonAttributes.strength(10),
			)
			target(
				CommonAttributes.health(15),
				PhysicalAttributes.defense(15),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.0, PhysicalAttributes.damage(source), "Source does unexpected damage.")
			assertEquals(-0.0, CommonAttributes.health(target), "Something strange happened with target's health.")
		}
		assertEquals(15.0, CommonAttributes.health(duel.target), "Target's health is different.")
	}
}
