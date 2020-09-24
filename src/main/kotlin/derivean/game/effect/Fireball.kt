package derivean.game.effect

import derivean.game.attribute.*
import kotlin.math.max

class Fireball : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel = Duel.build {
		val cost = duel.source.fireballCost()
		val attack = (duel.source.fireAttack() + duel.source.fireballAttack()) * (1 + duel.source.fireElement())
		val element = duel.target.fireElement()
		val defense = if (element <= -1) -attack else duel.target.fireDefense() * (1 + element)
		val damage = if (element >= 1) 0.0 else max(attack - defense, 0.0)
		source(
			cost.fireballCost(),
			(-1.0 * cost).mana(),
			damage.damage(),
			damage.fireDamage(),
		)
		target(
			(-1.0 * damage).health(),
		)
	}

	companion object {
		private const val ATTRIBUTE_COST = "effect/fireball/cost"
		private const val ATTRIBUTE_ATTACK = "effect/fireball/attack"

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
