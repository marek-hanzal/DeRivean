package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.formation.Formation
import derivean.game.mutator.IMutator
import derivean.game.mutator.Target
import derivean.game.mutator.Targets

interface IAbility {
	/**
	 * Ability name.
	 */
	val ability: String
	val mutator: IMutator

	fun use(entity: Entity, targets: Entities = Entities())

	fun target(entity: Entity, target: Entity): Target

	fun targets(entity: Entity, formation: Formation): Targets
}
