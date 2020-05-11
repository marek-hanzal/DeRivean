package derivean.game.selector

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class LowestHealthSelector : AbstractSelector() {
	override fun select(spirit: Spirit, spirits: Spirits): Spirits {
		return Spirits(spirits.list().minBy { it.entity.attributes.get("health") }?.let { listOf(it) } ?: listOf())
	}
}
