package derivean.game.selector

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class RandomSelector : AbstractSelector() {
	override fun select(spirit: Spirit, spirits: Spirits): Spirits = Spirits(spirits.list().random())
}
