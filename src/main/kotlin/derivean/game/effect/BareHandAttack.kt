package derivean.game.effect

import derivean.game.attribute.Duel
import derivean.game.attribute.PhysicalAttributes
import derivean.game.attribute.health
import derivean.game.attribute.strength
import kotlin.math.max

class BareHandAttack : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel = Duel.build {
		val damage = max(duel.source.strength() - PhysicalAttributes.defense(duel.target), 0.0)
		source(
			PhysicalAttributes.damage(damage),
		)
		target(
			(-1.0 * damage).health(),
		)
	}
}
