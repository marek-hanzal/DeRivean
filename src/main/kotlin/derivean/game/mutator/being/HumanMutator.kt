package derivean.game.mutator.being

import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator
import derivean.game.mutator.physical.BareHandAttack

/**
 * This mutator provides basic attributes and abilities related to human beings.
 */
class HumanMutator : AbstractMutator() {
	override fun mutate(mutator: Mutator, targets: List<Entity>) {
		mutator.attributes(
			100.0.health(),
			50.0.maxMana(),
			50.0.mana(),
			5.0.strength(),
			5.0.physicalDefense(),
		)
		mutator.ability(BareHandAttack.ability("attack.bare-hands"))
	}
}
