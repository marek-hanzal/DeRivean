package derivean.game.mutator.mutators.role

import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.haste
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutators

class WarriorRoleMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		/**
		 * Take default health and increase it by a half.
		 */
		entity.attributes.multiply(1.5.health())
		/**
		 * Take default Strength and increase it by 20%.
		 */
		entity.attributes.multiply(1.2.strength())
		/**
		 * A little increase in haste for warriors.
		 */
		entity.attributes.decOrZero(0.1.haste())
		entity.attributes.set(
			1.0.classWarrior(),
		)
	}

	companion object {
		const val MUTATOR = "role.warrior"
		fun mutator() = Pair(MUTATOR, WarriorRoleMutator())
	}
}

fun Mutators.warriorMutator() = this[WarriorRoleMutator.MUTATOR]
