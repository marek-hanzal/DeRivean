package derivean.game.ability.physical

import derivean.game.ability.AbstractAbility
import derivean.game.ability.Effect
import derivean.game.ability.IEffect
import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class AttackAbility : AbstractAbility() {
	override fun use(spirit: Spirit, spirits: Spirits): List<IEffect> = with(mutableListOf<IEffect>()) {
		spirits.list().forEach { target ->
			add(Effect(target, Entity.build {
				health -= spirit.entity.attack.physical - target.entity.defense.physical
			}))
		}
		return this
	}
}
