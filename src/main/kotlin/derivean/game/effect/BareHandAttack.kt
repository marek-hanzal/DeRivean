package derivean.game.effect

import derivean.game.attribute.*
import kotlin.math.max

class BareHandAttack : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel = Duel.build {
		val damage = max(duel.source.strength() - duel.target.physicalDefense(), 0.0)
		source(
			damage.physicalDamage(),
		)
		target(
			(-1.0 * damage).health(),
		)
	}
}
