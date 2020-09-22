package derivean.game.effect

import derivean.game.attribute.Attributes
import derivean.game.attribute.Duel

class FireballAttack : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel {
		TODO("Not yet implemented")
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
