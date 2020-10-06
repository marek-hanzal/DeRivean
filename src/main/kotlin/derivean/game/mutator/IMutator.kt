package derivean.game.mutator

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.entity.mutateWith

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

	fun mutation(entity: Entity, target: Entity) = mutation(entity, Entities(target))

	fun mutate(mutator: Mutator, targets: Entities = Entities()) = mutation(mutator, targets).evaluate()

	fun mutate(entity: Entity, targets: Entities = Entities()) = mutate(entity.mutateWith(), targets)

	fun mutate(entity: Entity, target: Entity) = mutate(entity.mutateWith(), Entities(target))

	fun target(mutator: Mutator, entity: Entity) = Target.build(entity) {}

	fun targets(mutator: Mutator, entities: Entities) = Targets.build(mutator, this, targets(mutator)) { }

	fun targets(mutator: Mutator) = 1.0
}
