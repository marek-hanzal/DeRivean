package derivean.game.mutator.mutators.being

import derivean.game.ability.abilities.physical.BareHandAttack
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutators

/**
 * This mutator provides basic attributes and abilities related to human beings.
 */
class HumanMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		entity.attributes.set(
			/**
			 * Default health of all human beings.
			 */
			100.0.health(),
			/**
			 * Average amount of mana a human being have.
			 */
			50.0.maxMana(),
			/**
			 * Current amount of mana of a human being.
			 */
			50.0.mana(),
			/**
			 * Amount of initiative per new round.
			 */
			10.0.roundInitiative(),
			/**
			 * Average strength of a human being.
			 */
			10.0.strength(),
			/**
			 * Some physical defense of a human.
			 */
			5.0.physicalDefense(),
			/**
			 * Average speed (haste) of human.
			 */
			1.0.haste(),
			/**
			 * By default there is no XP gain on the beginning.
			 */
			0.0.xp(),
		)
		entity.abilities.ability(BareHandAttack.build { })
	}

	companion object {
		const val MUTATOR = "being.human"
		fun mutator() = Pair(MUTATOR, HumanMutator())
	}
}

fun Mutators.humanMutator() = this[HumanMutator.MUTATOR]
