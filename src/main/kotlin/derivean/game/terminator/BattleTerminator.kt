package derivean.game.terminator

import derivean.game.attribute.common.health
import derivean.game.formation.Formations

class BattleTerminator(loop: Int, limit: Int) : AbstractTerminator(loop, limit) {
	override fun loop(formations: Formations) {
		super.loop(formations)
		if (formations.filter { (_, formation) -> formation.sumByDouble { it.attributes.health() } > 0.0 }.count() <= 1) {
			throw TheEndException("The Battle has Ended.")
		}
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var loop = 0
		var limit = 128

		fun build() = BattleTerminator(
			loop,
			limit,
		)
	}
}
