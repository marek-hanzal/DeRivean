package derivean.game.ability

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.IMutator
import derivean.game.mutator.Target
import derivean.game.mutator.Targets

interface IAbility {
	/**
	 * Ability name.
	 */
	val ability: String

	/**
	 * Mutator of this Ability.
	 */
	val mutator: IMutator

	/**
	 * Compute Target for this ability (using it's attributes).
	 */
	fun target(entity: Entity, target: Entity): Target

	/**
	 * Compute targets based on input Entities.
	 */
	fun targets(entity: Entity, entities: Entities): Targets
}
