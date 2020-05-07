package derivean.game.ability.healing

import derivean.game.ability.AbstractAbility
import derivean.game.ability.IEffect
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class HealingAbility : AbstractAbility() {
	override fun use(spirit: Spirit, spirits: Spirits): List<IEffect> = listOf()
}
