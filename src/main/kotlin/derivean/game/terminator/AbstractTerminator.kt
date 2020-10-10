package derivean.game.terminator

import derivean.game.formation.Formations

abstract class AbstractTerminator(var loop: Int = 0, val limit: Int) : ITerminator {
	override fun loop(formations: Formations) {
		if (++loop >= limit) {
			throw TheEndException("Loop limit reached!")
		}
	}
}
