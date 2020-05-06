package derivean.game.ability.magical

import derivean.game.ability.AbstractAbility
import derivean.game.ability.Effect
import derivean.game.ability.IEffect
import derivean.game.entity.Entity
import derivean.game.entity.Relationships
import derivean.game.entity.Spirit
import derivean.game.selector.LowestHealthSelector

class AttackAbility(id: String, description: String) : AbstractAbility(id, description) {
	private val selector = LowestHealthSelector()

	override fun use(spirit: Spirit, relationships: Relationships): List<IEffect> = with(mutableListOf<IEffect>()) {
		selector.select(spirit, relationships.enemiesOf(spirit)).list().forEach { target ->
			add(Effect(target, Entity.build {
				health -= spirit.entity.attack.magical - target.entity.defense.magical
			}))
		}
		return this
	}
}
