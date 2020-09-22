package derivean.game.effect

import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.PhysicalAttributes
import kotlin.math.max

class BareHandAttack : AbstractEffect() {
	override fun evaluate(duel: Duel): Duel = Duel.build {
		val damage = max(CommonAttributes.strength(duel.source) - PhysicalAttributes.defense(duel.target), 0.0)
		source(
			PhysicalAttributes.damage(damage),
		)
		target(
			CommonAttributes.health(-1 * damage),
		)
	}
}
