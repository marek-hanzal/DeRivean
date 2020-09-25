package derivean.game.effect.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Duel
import derivean.game.attribute.Result
import derivean.game.attribute.common.health
import derivean.game.attribute.common.physicalDamage
import derivean.game.attribute.common.physicalDefense
import derivean.game.attribute.common.strength
import derivean.game.effect.AbstractEffect
import derivean.game.operator.operators.decOrZero
import derivean.game.operator.operators.set
import kotlin.math.max

class BareHandAttack : AbstractEffect() {
	override fun evaluate(duel: Duel) = Result.build(duel) {
		val damage = max(duel.source.strength() - duel.target.physicalDefense(), 0.0)
		source(
			damage.physicalDamage().set(),
		)
		target(
			damage.health().decOrZero(),
		)
	}
}

fun BareHandAttack.ability(name: String) = Pair(name, Ability(name, this))
