package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity
import derivean.game.mutator.IMutator
import derivean.game.mutator.Mutator

abstract class AbstractAbility(override val ability: String, override val mutator: IMutator, val attributes: Attributes) : IAbility {
	override fun use(entity: Entity, targets: List<Entity>) = mutator.mutate(Mutator(entity, attributes), targets)
}
