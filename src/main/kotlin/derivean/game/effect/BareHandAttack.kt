package derivean.game.effect

import derivean.game.attribute.*
import derivean.game.operator.negate
import kotlin.math.max

class BareHandAttack : AbstractEffect() {
	override fun evaluate(duel: Duel) = Result.build(duel) {
		val damage = max(duel.source.strength() - duel.target.physicalDefense(), 0.0)
		source(
			damage.physicalDamage(),
		)
		target(
			damage.health().negate(),
		)
	}
}
