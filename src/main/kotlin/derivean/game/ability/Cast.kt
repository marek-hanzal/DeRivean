package derivean.game.ability

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

data class Cast(val spirit: Spirit, val ability: IAbility, val spirits: Spirits) : ICast {
	override fun cast(): List<IEffect> = ability.use(spirit, spirits)
}
