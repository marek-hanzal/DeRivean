package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.IMutator
import derivean.game.mutator.Mutator

abstract class AbstractAbility(override val ability: String, override val mutator: IMutator, val attributes: Attributes) : IAbility {
	override fun use(entity: Entity, targets: Entities) = mutator.mutation(Mutator(entity, attributes), targets).evaluate()
}
