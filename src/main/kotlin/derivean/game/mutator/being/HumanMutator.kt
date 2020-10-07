package derivean.game.mutator.being

import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutators

/**
 * This mutator provides basic attributes and abilities related to human beings.
 */
class HumanMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		entity.attributes(
			100.0.health(),
			50.0.maxMana(),
			50.0.mana(),
			10.0.currentInitiative(),
			10.0.strength(),
			5.0.physicalDefense(),
		)
	}

	companion object {
		const val MUTATOR = "being.human"
		fun mutator() = Pair(MUTATOR, HumanMutator())
	}
}

fun Mutators.humanMutator() = this[HumanMutator.MUTATOR]
