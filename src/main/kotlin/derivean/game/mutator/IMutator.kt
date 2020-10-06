package derivean.game.mutator

import derivean.game.entity.Entity
import derivean.game.entity.mutateWith
import derivean.game.formation.Formation

/**
 * Mutator takes attributes as an input and do some magic around them and return output attributes
 * delta (or apply them).
 *
 * Main use case is for example WaterElemental which can make higher water damage output, but make the
 * Element weaker against Fire, thus partially implementing game rules.
 */
interface IMutator {
	/**
	 * General method how to mutate one Entity or how to use source Entity to
	 * mutate target entities.
	 *
	 * This method could be used for example as HumanMutator (mutate input Entity to Human) or
	 * as Mutator implementing attack (for example entity attacks targets).
	 */
	fun mutation(mutator: Mutator, targets: Entities = Entities()): Mutation

	fun mutation(entity: Entity, targets: Entities = Entities()) = mutation(entity.mutateWith(), targets)

	fun resolveTarget(mutator: Mutator, entity: Entity) = Target.build(entity) {}

	fun resolveTargets(mutator: Mutator, formation: Formation) = Targets.build(mutator, this, resolveTargets(mutator)) { }

	fun resolveTargets(mutator: Mutator) = 1.0
}
