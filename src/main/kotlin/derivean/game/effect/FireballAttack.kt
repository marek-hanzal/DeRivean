package derivean.game.effect

import derivean.game.attribute.Attributes
import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.FireAttributes
import kotlin.math.max

class FireballAttack : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel = Duel.build {
		val cost = cost(duel.source)
		val attack = (attack(duel.source) + FireAttributes.attack(duel.source)) * (1 + FireAttributes.element(duel.source))
		val resistance = FireAttributes.element(duel.target)
		val defense = if (resistance <= -1) -attack else FireAttributes.defense(duel.target) * (1 + resistance)
		val damage = if (resistance >= 1) 0.0 else max(attack - defense, 0.0)
		source(
			cost(cost),
			CommonAttributes.mana(-cost),
			CommonAttributes.damage(damage),
			FireAttributes.damage(damage),
		)
		target(
			CommonAttributes.health(-1.0 * damage)
		)
	}

	companion object {
		private const val ATTRIBUTE_COST = "effect/fireball/cost"
		private const val ATTRIBUTE_ATTACK = "effect/fireball/attack"

		fun cost(value: Double): Pair<String, Double> = ATTRIBUTE_COST to value
		fun cost(value: Int): Pair<String, Double> = cost(value.toDouble())
		fun cost(attributes: Attributes): Double = attributes[ATTRIBUTE_COST]

		fun attack(value: Double): Pair<String, Double> = ATTRIBUTE_ATTACK to value
		fun attack(value: Int): Pair<String, Double> = attack(value.toDouble())
		fun attack(attributes: Attributes): Double = attributes[ATTRIBUTE_ATTACK]
	}
}
