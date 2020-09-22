package derivean.game.effect

import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.FireAttributes
import org.junit.Test
import kotlin.test.assertEquals

class FireballAttackTest {
	@Test
	fun `Fireball attack`() {
		assertions(sourceElement = 0.5, targetElement = 0.0, sourceDamage = 22.0, targetHealth = -7.0)
		assertions(sourceElement = 0.5, targetElement = 0.5, sourceDamage = 19.5, targetHealth = -4.5)
		assertions(sourceElement = 0.0, targetElement = 1.0, sourceDamage = 0.0, targetHealth = 15.0)
		assertions(sourceElement = 0.0, targetElement = -1.0, sourceDamage = 36.0, targetHealth = -21.0)
	}

	private fun assertions(sourceElement: Double, targetElement: Double, sourceDamage: Double, targetHealth: Double) {
		val effect = FireballAttack()
		val duel = Duel.build {
			source(
				/**
				 * the amount of mana of this entity
				 */
				CommonAttributes.mana(10),
				/**
				 * cost of fireball attack of this entity
				 */
				FireballAttack.cost(0.25),
				/**
				 * the attack rating of fireball
				 */
				FireballAttack.attack(12),
				/**
				 * common fire attack power
				 */
				FireAttributes.attack(6),
				/**
				 * elemental power of this entity (0 - no element, 1 - full element resistance)
				 */
				FireAttributes.element(sourceElement),
			)
			target(
				CommonAttributes.health(15.0),
				FireAttributes.defense(5),
				FireAttributes.element(targetElement),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.25, FireballAttack.cost(source), "Nope, there is no cost of fire magic. That's strange.")
			assertEquals(-0.25, CommonAttributes.mana(source), "There is no loss of mana. Ooops.")
			assertEquals(-sourceDamage, CommonAttributes.health(target), "Target did not loss expected amount of health!")
			assertEquals(sourceDamage, CommonAttributes.damage(source), "Unexpected damage given.")
			assertEquals(sourceDamage, FireAttributes.damage(source), "Unexpected damage given.")
		}
		assertEquals(9.75, CommonAttributes.mana(duel.source), "Mana was not adjusted :(.")
		assertEquals(targetHealth, CommonAttributes.health(duel.target), "Target does not have expected health.")
	}
}
