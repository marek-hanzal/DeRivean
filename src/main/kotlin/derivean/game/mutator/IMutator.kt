package derivean.game.mutator

import derivean.game.entity.Entity

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
	fun mutate(entity: Entity, targets: List<Entity> = listOf())

	fun mutate(entity: Entity, target: Entity) = mutate(entity, listOf(target))
}
