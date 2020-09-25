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
	 * Actually modify input entity with this mutator.
	 */
	fun mutate(entity: Entity)
}
