package derivean.game.effect

import derivean.game.attribute.*
import derivean.game.attribute.element.fireAttack
import derivean.game.attribute.element.fireDamage
import derivean.game.attribute.element.fireDefense
import derivean.game.attribute.element.fireElement
import derivean.game.operator.dec
import derivean.game.operator.inc
import derivean.game.operator.set
import kotlin.math.max

class Fireball : AbstractEffect() {
	override fun evaluate(duel: Duel) = Result.build(duel) {
		val cost = duel.source.fireballCost()
		val attack = (duel.source.fireAttack() + duel.source.fireballAttack()) * (1 + duel.source.fireElement())
		val element = duel.target.fireElement()
		val defense = if (element <= -1) -attack else duel.target.fireDefense() * (1 + element)
		val damage = if (element >= 1) 0.0 else max(attack - defense, 0.0)
		source(
			cost.fireballCost().inc(),
			cost.mana().dec(),
			damage.damage().set(),
			damage.fireDamage().set(),
		)
		target(
			damage.health().dec(),
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
