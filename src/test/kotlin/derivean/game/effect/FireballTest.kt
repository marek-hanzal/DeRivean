package derivean.game.effect

import derivean.game.attribute.Duel
import derivean.game.attribute.common.damage
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.effect.element.fire.Fireball
import derivean.game.effect.element.fire.fireballAttack
import derivean.game.effect.element.fire.fireballCost
import org.junit.Test
import kotlin.test.assertEquals

class FireballTest {
	@Test
	fun `Fireball attack`() {
		assertions(
			sourceElement = 0.5,
			targetElement = 0.0,
			sourceDamage = 22.0,
			targetHealth = 0.0
		)
		assertions(
			sourceElement = 0.5,
			targetElement = 0.5,
			sourceDamage = 19.5,
			targetHealth = 0.0
		)
		assertions(
			sourceElement = 0.0,
			targetElement = 1.0,
			sourceDamage = 0.0,
			targetHealth = 15.0
		)
		assertions(
			sourceElement = 0.0,
			targetElement = 2.0,
			sourceDamage = 0.0,
			targetHealth = 15.0
		)
		assertions(
			sourceElement = 0.0,
			targetElement = -1.0,
			sourceDamage = 36.0,
			targetHealth = 0.0
		)
		assertions(
			sourceElement = 0.0,
			targetElement = -0.95,
			sourceDamage = 17.75,
			targetHealth = 0.0
		)
		assertions(
			sourceElement = 0.0,
			targetElement = -2.0,
			sourceDamage = 36.0,
			targetHealth = 0.0
		)
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
		effect.evaluate(duel).resolve()

		assertEquals(9.75, duel.source.mana(), "Mana was not adjusted :(.")
		assertEquals(sourceDamage, duel.source.damage(), "Unexpected damage.")
		assertEquals(sourceDamage, duel.source.fireDamage(), "Unexpected fire damage.")

		assertEquals(targetHealth, duel.target.health(), "Target does not have expected health.")
	}
}
