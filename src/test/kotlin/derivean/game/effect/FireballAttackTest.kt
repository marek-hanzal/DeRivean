package derivean.game.effect

import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.FireAttributes
import org.junit.Test
import kotlin.test.assertEquals

class FireballAttackTest {
	@Test
	fun `Fireball attack against simple foe`() {
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
				FireAttributes.element(0.5),
			)
			target(
				CommonAttributes.health(15),
				FireAttributes.defense(5),
				FireAttributes.element(0),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.25, FireballAttack.cost(source), "Nope, there is no cost of fire magic. That's strange.")
			assertEquals(-0.25, CommonAttributes.mana(source), "There is no loss of mana. Ooops.")
			assertEquals(-22.0, CommonAttributes.health(target), "Target did not loss expected amount of health!")
			assertEquals(22.0, CommonAttributes.damage(source), "Unexpected damage given.")
			assertEquals(22.0, FireAttributes.damage(source), "Unexpected damage given.")
		}
		assertEquals(9.75, CommonAttributes.mana(duel.source), "Mana was not adjusted :(.")
		assertEquals(-7.0, CommonAttributes.health(duel.target), "Target should be really dead.")
	}

	@Test
	fun `Fireball attack against fire elemental foe`() {
		val effect = FireballAttack()
		val duel = Duel.build {
			source(
				CommonAttributes.mana(10),
				FireballAttack.cost(0.25),
				FireballAttack.attack(12),
				FireAttributes.attack(6),
				FireAttributes.element(0),
			)
			target(
				CommonAttributes.health(15),
				FireAttributes.defense(5),
				FireAttributes.element(1),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.25, FireballAttack.cost(source), "Nope, there is no cost of fire magic. That's strange.")
			assertEquals(-0.25, CommonAttributes.mana(source), "There is no loss of mana. Ooops.")
			assertEquals(-0.0, CommonAttributes.health(target), "Target did loss unexpected amount of health!")
			assertEquals(0.0, CommonAttributes.damage(source), "Unexpected damage given.")
			assertEquals(0.0, FireAttributes.damage(source), "Unexpected damage given.")
		}
		assertEquals(9.75, CommonAttributes.mana(duel.source), "Mana was not adjusted :(.")
		assertEquals(15.0, CommonAttributes.health(duel.target), "Target should not be affected.")
	}

	@Test
	fun `Fireball attack against foe weak to fire`() {
		val effect = FireballAttack()
		val duel = Duel.build {
			source(
				CommonAttributes.mana(10),
				FireballAttack.cost(0.25),
				FireballAttack.attack(12),
				FireAttributes.attack(6),
				FireAttributes.element(0),
			)
			target(
				CommonAttributes.health(15),
				FireAttributes.defense(5),
				FireAttributes.element(-1),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(0.25, FireballAttack.cost(source), "Nope, there is no cost of fire magic. That's strange.")
			assertEquals(-0.25, CommonAttributes.mana(source), "There is no loss of mana. Ooops.")
			assertEquals(-36.0, CommonAttributes.health(target), "Target did loss unexpected amount of health!")
			assertEquals(36.0, CommonAttributes.damage(source), "Unexpected damage given.")
			assertEquals(36.0, FireAttributes.damage(source), "Unexpected damage given.")
		}
		assertEquals(9.75, CommonAttributes.mana(duel.source), "Mana was not adjusted :(.")
		assertEquals(-21.0, CommonAttributes.health(duel.target), "Target should be dead.")
	}
}
