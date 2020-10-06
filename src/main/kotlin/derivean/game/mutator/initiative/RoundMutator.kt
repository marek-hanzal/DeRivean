package derivean.game.mutator.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.attribute.common.roundInitiative
import derivean.game.entity.Entities
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutation
import derivean.game.mutator.Mutator

class RoundMutator : AbstractMutator() {
	override fun mutation(mutator: Mutator, targets: Entities) = Mutation.build(mutator, targets) {
		mutation {
			/**
			 * Round initiative is used as current initiative on round reset (thus here).
			 */
			mutator.attributes(mutator.current.roundInitiative().currentInitiative())
		}
	}
}
