package derivean.game.effect

import derivean.game.attribute.Duel
import derivean.game.attribute.damage
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.attribute.health
import derivean.game.attribute.mana
import org.junit.Test
import kotlin.test.assertEquals

class FireballTest {
	@Test
	fun `Fireball attack`() {
		assertions(sourceElement = 0.5, targetElement = 0.0, sourceDamage = 22.0, targetHealth = -7.0)
		assertions(sourceElement = 0.5, targetElement = 0.5, sourceDamage = 19.5, targetHealth = -4.5)
		assertions(sourceElement = 0.0, targetElement = 1.0, sourceDamage = 0.0, targetHealth = 15.0)
		assertions(sourceElement = 0.0, targetElement = 2.0, sourceDamage = 0.0, targetHealth = 15.0)
		assertions(sourceElement = 0.0, targetElement = -1.0, sourceDamage = 36.0, targetHealth = -21.0)
		assertions(sourceElement = 0.0, targetElement = -0.95, sourceDamage = 17.75, targetHealth = -2.75)
		assertions(sourceElement = 0.0, targetElement = -2.0, sourceDamage = 36.0, targetHealth = -21.0)
	}

	private fun assertions(sourceElement: Double, targetElement: Double, sourceDamage: Double, targetHealth: Double) {
		val effect = Fireball()
		val duel = Duel.build {
			source(
				/**
				 * the amount of mana of this entity
				 */
				10.0.mana(),
				/**
				 * cost of fireball attack of this entity
				 */
				0.25.fireballCost(),
				/**
				 * the attack rating of fireball
				 */
				12.0.fireballAttack(),
				/**
				 * common fire attack power
				 */
				6.0.fireAttack(),
				/**
				 * elemental power of this entity (0 - no element, 1 - full element resistance)
				 */
				sourceElement.fireElement(),
			)
			target(
				15.0.health(),
				5.0.fireDefense(),
				targetElement.fireElement(),
			)
		}
		with(effect.evaluate(duel).resolve()) {
			assertEquals(0.25, source.fireballCost(), "Nope, there is no cost of fire magic. That's strange.")
			assertEquals(-0.25, source.mana(), "There is no loss of mana. Ooops.")
			assertEquals(-sourceDamage, target.health(), "Target did not loss expected amount of health!")
			assertEquals(sourceDamage, source.damage(), "Unexpected damage given.")
			assertEquals(sourceDamage, source.fireDamage(), "Unexpected damage given.")
		}
		assertEquals(9.75, duel.source.mana(), "Mana was not adjusted :(.")
		assertEquals(targetHealth, duel.target.health(), "Target does not have expected health.")
	}
}
