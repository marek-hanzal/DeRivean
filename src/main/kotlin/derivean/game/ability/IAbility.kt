package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.mutator.IMutator

interface IAbility {
	/**
	 * Ability name.
	 */
	val ability: String
	val mutator: IMutator

	fun use(entity: Entity, targets: List<Entity> = listOf())
}
