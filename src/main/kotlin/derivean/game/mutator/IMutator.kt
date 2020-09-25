package derivean.game.mutator

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity
import derivean.game.operator.Operators

/**
 * Mutator takes attributes as an input and do some magic around them and return output attributes
 * delta (or apply them).
 *
 * Main use case is for example WaterElemental which can make higher water damage output, but make the
 * Element weaker against Fire, thus partially implementing game rules.
 */
interface IMutator {
	/**
	 * Take attributes on input and compute mutation delta on output; input attributes
	 * should **not** be affected!
	 */
	fun evaluate(attributes: Attributes): Operators

	/**
	 * Shortcut to mutate an Entity.
	 */
	fun evaluate(entity: Entity): Operators

	/**
	 * Actually modify input entity with this mutator.
	 */
	fun mutate(entity: Entity)
}
