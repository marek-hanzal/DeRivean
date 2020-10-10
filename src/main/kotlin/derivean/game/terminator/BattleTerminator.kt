package derivean.game.terminator

import derivean.game.attribute.common.health
import derivean.game.formation.Formations

class BattleTerminator : AbstractTerminator() {
	override fun loop(formations: Formations) {
		if (formations.filter { (_, formation) -> formation.sumByDouble { it.attributes.health() } > 0.0 }.count() <= 1) {
			throw TheEndException("The Battle has Ended.")
		}
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = BattleTerminator(
		)
	}
}
