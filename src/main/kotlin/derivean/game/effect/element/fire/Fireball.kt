package derivean.game.effect.element.fire

import derivean.game.attribute.Attributes
import derivean.game.attribute.Duel
import derivean.game.attribute.Result
import derivean.game.attribute.common.damage
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.effect.AbstractEffect
import derivean.game.operator.operators.decOrZero
import derivean.game.operator.operators.set
import kotlin.math.max

class Fireball : AbstractEffect() {
	override fun evaluate(duel: Duel) = Result.build(duel) {
		/**
		 * Every entity could have different cost of casting fireball; this is just for better readability.
		 */
		val cost = duel.source.fireballCost()

		/**
		 * Compute base attack of source entity.
		 */
		val attack = (duel.source.fireAttack() + duel.source.fireballAttack()) * (1 + duel.source.fireElement())

		/**
		 * Take elemental value of target entity.
		 */
		val element = duel.target.fireElement()

		/**
		 * Base target entity defense.
		 */
		val defense = if (element <= -1) -attack else duel.target.fireDefense() * (1 + element)

		/**
		 * Compute final damage (if any).
		 */
		val damage = if (element >= 1) 0.0 else max(attack - defense, 0.0)
		source(
			/**
			 * Take cost of casting fireball and mark it as mana loss (decrease).
			 */
			cost.mana().decOrZero(),
			/**
			 * Set (general) damage done in this duel.
			 */
			damage.damage().set(),
			/**
			 * Set fire damage done in this duel.
			 */
			damage.fireDamage().set(),
		)
		target(
			/**
			 * Take damage as health and decrease it (health loss done by fireball).
			 */
			damage.health().decOrZero(),
		)
	}

	companion object {
		private const val ATTRIBUTE_COST = "effect.fireball.cost"
		private const val ATTRIBUTE_ATTACK = "effect.fireball.attack"

		fun cost(value: Double) = ATTRIBUTE_COST to value
		fun cost(attributes: Attributes) = attributes[ATTRIBUTE_COST]

		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK]
	}
}

fun Double.fireballCost() = Fireball.cost(this)
fun Attributes.fireballCost() = Fireball.cost(this)
fun Double.fireballAttack() = Fireball.attack(this)
fun Attributes.fireballAttack() = Fireball.attack(this)
