package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity
import derivean.game.mutator.IMutator
import derivean.game.mutator.Mutant

abstract class AbstractAbility(val name: String, val mutator: IMutator, val attributes: Attributes) : IAbility {
	override fun use(entity: Entity, targets: List<Entity>) = mutator.mutate(Mutant(entity, attributes), targets)
}
