package derivean.game.mutator.element.fire

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.damage
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator
import kotlin.math.max

class Fireball : AbstractMutator() {
	override fun mutate(mutator: Mutator, targets: List<Entity>) {
		val attributes = mutator.attributes()

		/**
		 * Compute base attack of source entity.
		 */
		val attack = (attributes.fireAttack() + attributes.fireballAttack()) * (1 + attributes.fireElement())

		/**
		 * Take cost of casting fireball and mark it as mana loss (decrease).
		 */
		mutator.entity.mana(attributes.mana() - attributes.fireballCost())

		for (target in targets) {
			/**
			 * Base target entity defense.
			 */
			val defense = if (target.fireElement() <= -1) -attack else target.fireDefense() * (1 + target.fireElement())

			/**
			 * Compute final damage (if any).
			 */
			val damage = if (target.fireElement() >= 1) 0.0 else max(attack - defense, 0.0)
			/**
			 * Set (general) damage done in this duel.
			 */
			mutator.entity.damage(mutator.entity.damage() + damage)
			/**
			 * Set fire damage done in this duel.
			 */
			mutator.entity.fireDamage(mutator.entity.fireDamage() + damage)
			/**
			 * Take damage as health and decrease it (health loss done by fireball).
			 */
			target.health(max(target.health() - damage, 0.0))
		}
	}

	companion object {
		private const val ATTRIBUTE_COST = "spell.fireball.cost"
		fun cost(value: Double) = ATTRIBUTE_COST to value
		fun cost(attributes: Attributes) = attributes[ATTRIBUTE_COST]

		private const val ATTRIBUTE_ATTACK = "spell.fireball.attack"
		fun attack(value: Double) = ATTRIBUTE_ATTACK to value
		fun attack(attributes: Attributes) = attributes[ATTRIBUTE_ATTACK]
	}
}

fun Double.fireballCost() = Fireball.cost(this)
fun Attributes.fireballCost() = Fireball.cost(this)
fun Entity.fireballCost() = this.attributes.fireballCost()

fun Double.fireballAttack() = Fireball.attack(this)
fun Attributes.fireballAttack() = Fireball.attack(this)
fun Entity.fireballAttack() = this.attributes.fireballAttack()
