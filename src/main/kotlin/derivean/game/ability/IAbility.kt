package derivean.game.ability

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.IMutator
import derivean.game.mutator.Targets

interface IAbility {
	/**
	 * Ability name.
	 */
	val ability: String
	val mutator: IMutator

	fun use(entity: Entity, targets: Entities = Entities())

	fun targets(entity: Entity, entities: Entities): Targets
}
