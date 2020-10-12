package derivean.game.mutator.mutators.role

import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutators

class WarriorRoleMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		/**
		 * Take default health and increase it by a half.
		 */
		entity.attributes.multiply(1.5.health())
		entity.attributes.multiply(1.5.maxHealth())
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
