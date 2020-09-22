package derivean.game.effect

import derivean.game.attribute.Duel

abstract class AbstractEffect : IEffect {
	override fun applyTo(duel: Duel): Duel {
		return evaluate(duel).also { duel += it }
	}
}
