package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.mutator.IMutator

abstract class AbstractAbility(val name: String, val mutator: IMutator, val attributes: Attributes) : IAbility {
//	override fun use(targets: List<Entity>) = mutator.mutate(entity, targets)
}
