package derivean.game.mutator.element.fire

import derivean.game.attribute.common.damage
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.entity.Entity
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
		val entity = Entity.build("Alfa") {
			attributes(
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
		}
		val target = Entity.build("Beta") {
			attributes(
				15.0.health(),
				5.0.fireDefense(),
				targetElement.fireElement(),
			)
		}
		effect.mutate(entity, target)

		assertEquals(9.75, entity.mana(), "Mana was not adjusted :(.")
		assertEquals(sourceDamage, entity.damage(), "Unexpected damage.")
		assertEquals(sourceDamage, entity.fireDamage(), "Unexpected fire damage.")

		assertEquals(targetHealth, target.health(), "Target does not have expected health.")
	}
}