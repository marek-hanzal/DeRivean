package derivean.game.mutator.role

import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entities
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutation
import derivean.game.mutator.Mutator

class WarriorClassMutator : AbstractMutator() {
	override fun mutation(mutator: Mutator, targets: Entities) = Mutation.build(mutator, targets) {
		mutation {
			mutator.attributes(
				/**
				 * Take default health and increase it by a half.
				 */
				(mutator.current.health() * 1.5).health(),
				/**
				 * Take default Strength and increase it by 20%.
				 */
				(mutator.current.strength() * 1.2).strength(),
				1.0.classWarrior(),
			)
		}
	}
}
