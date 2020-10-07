package derivean.game.mutator.role

import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutators

class WarriorRoleMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		entity.attributes(
			/**
			 * Take default health and increase it by a half.
			 */
			(entity.health() * 1.5).health(),
			/**
			 * Take default Strength and increase it by 20%.
			 */
			(entity.strength() * 1.2).strength(),
			1.0.classWarrior(),
		)
	}

	companion object {
		const val MUTATOR = "role.warrior"
		fun mutator() = Pair(MUTATOR, WarriorRoleMutator())
	}
}

fun Mutators.warriorMutator() = this[WarriorRoleMutator.MUTATOR]
