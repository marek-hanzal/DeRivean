package derivean.game.initiative

import derivean.game.mutator.IMutator

abstract class AbstractInitiative(
	/**
	 * When an Entity gets an Initiative, this Mutator is used to adjust
	 * Entity's Initiative value (for example reset to zero).
	 */
	val reset: IMutator,
	/**
	 * When all entities are without initiative (it's zero), this mutator
	 * is used for new initiative computation.
	 */
	val round: IMutator,
) : IInitiative
