package derivean.game.ability.magical.fire

import derivean.game.ability.AbstractAbility
import derivean.game.ability.IEffect
import derivean.game.entity.Relationships
import derivean.game.entity.Spirit

class FireballAbility(id: String, description: String) : AbstractAbility(id, description) {
	override fun use(spirit: Spirit, relationships: Relationships): List<IEffect> = listOf()
}
