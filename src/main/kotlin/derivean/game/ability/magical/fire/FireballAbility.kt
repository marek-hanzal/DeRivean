package derivean.game.ability.magical.fire

import derivean.game.ability.AbstractAbility
import derivean.game.ability.IEffect
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class FireballAbility(id: String, description: String) : AbstractAbility() {
	override fun use(spirit: Spirit, spirits: Spirits): List<IEffect> = listOf()
}
