package derivean.game.mutator

import derivean.game.effect.physical.BareHandAttack
import derivean.game.effect.physical.ability
import derivean.game.entity.Entity

/**
 * This mutator provides basic attributes and abilities related to human beings.
 */
class HumanMutator : AbstractMutator() {
	override fun mutate(entity: Entity) {
		entity.abilities += BareHandAttack().ability("attack.bare-hand")
	}
}
