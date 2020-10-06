package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity
import derivean.game.entity.mutateWith
import derivean.game.formation.Formation
import derivean.game.mutator.IMutator
import derivean.game.mutator.Mutator
import derivean.game.mutator.Targets

abstract class AbstractAbility(override val ability: String, override val mutator: IMutator, val attributes: Attributes) : IAbility {
	override fun use(entity: Entity, targets: Targets) = mutator.mutation(Mutator(entity, attributes), targets).evaluate()

	override fun target(entity: Entity, target: Entity) = mutator.resolveTarget(entity.mutateWith(attributes), target)

	override fun targets(entity: Entity, formation: Formation) = mutator.resolveTargets(entity.mutateWith(attributes), formation)
}
