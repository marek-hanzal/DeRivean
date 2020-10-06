package derivean.game.mutator.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entities
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutation
import derivean.game.mutator.Mutator

class ResetMutator : AbstractMutator() {
	override fun mutation(mutator: Mutator, targets: Entities) = Mutation.build(mutator, targets) {
		mutation {
			mutator.attributes(0.0.currentInitiative())
		}
	}
}
